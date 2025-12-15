import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import { personalInfo } from '@/data/content';

export async function GET(request: NextRequest) {
  try {
    if (!personalInfo.cvGoogleDocId) {
      return NextResponse.json(
        { error: 'CV Google Doc ID not configured' },
        { status: 500 }
      );
    }

    // Download the PDF from Google Docs
    const pdfUrl = `https://docs.google.com/document/d/${personalInfo.cvGoogleDocId}/export?format=pdf`;
    console.log('Downloading PDF from:', pdfUrl);
    
    const response = await fetch(pdfUrl);
    
    if (!response.ok) {
      console.error('Failed to download PDF:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to download PDF from Google Docs' },
        { status: response.status }
      );
    }

    const pdfBytes = await response.arrayBuffer();
    console.log('PDF downloaded, size:', pdfBytes.byteLength, 'bytes');
    
    // Load the source PDF document
    const sourcePdf = await PDFDocument.load(pdfBytes);
    
    // Get all pages
    const pageCount = sourcePdf.getPageCount();
    console.log('Original PDF has', pageCount, 'pages');
    
    // Create a new PDF document
    const newPdf = await PDFDocument.create();
    
    // Copy all pages except the first one (index 0)
    if (pageCount > 1) {
      const pagesToCopy = await newPdf.copyPages(sourcePdf, Array.from({ length: pageCount - 1 }, (_, i) => i + 1));
      pagesToCopy.forEach((page) => {
        newPdf.addPage(page);
      });
      console.log('Created new PDF with', pagesToCopy.length, 'pages (skipped first page)');
    } else {
      // If only one page, copy it anyway (user might want to keep it)
      const pagesToCopy = await newPdf.copyPages(sourcePdf, [0]);
      pagesToCopy.forEach((page) => {
        newPdf.addPage(page);
      });
      console.log('PDF only has 1 page, keeping it');
    }
    
    // Save the modified PDF
    const modifiedPdfBytes = await newPdf.save();
    console.log('Modified PDF size:', modifiedPdfBytes.length, 'bytes');
    
    // Convert Uint8Array to Buffer for NextResponse compatibility
    const pdfBuffer = Buffer.from(modifiedPdfBytes);
    
    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="CV.pdf"',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error processing CV PDF:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Failed to process CV PDF', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
