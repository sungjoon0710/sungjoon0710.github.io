import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '../ui/button';
import { isMobile } from 'react-device-detect';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  fileName: string; // e.g. "resume.pdf"
}

export default function PdfViewer({ fileName }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    // The file path should be relative to the public directory
    const fileUrl = `/${fileName}`;

    return (
        <>
            {isMobile ? (
                <div className="w-full max-w-full h-auto overflow-x-hidden flex flex-col items-center">
                    <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page
                            pageNumber={pageNumber}
                            width={Math.min(window.innerWidth, 500) - 5} // 5px margin for safety
                            className="mx-auto"
                        />
                    </Document>
                    {numPages && (
                        <div className="flex gap-4 mt-2 items-center">
                            <Button
                                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                                disabled={pageNumber <= 1}
                                >
                                Prev
                            </Button>

                            <span className="text-sm">
                                {pageNumber} / {numPages}
                            </span>

                            <Button
                                onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                                disabled={pageNumber >= numPages}
                                >
                                Next
                            </Button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full h-full overflow-hidden flex flex-col items-center">
                    <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    <div className="flex flex-row justify-center gap-4">
                        <Page pageNumber={pageNumber} />
                        {pageNumber < (numPages ?? 0) && (
                        <Page pageNumber={pageNumber + 1} />
                        )}
                    </div>
                    </Document>
                    {numPages && (
                    <div className="flex flex-row gap-5 items-center ">
                        
                        <Button
                            onClick={() => setPageNumber((p) => Math.max(1, p - 2))}
                            disabled={pageNumber <= 1}
                        >
                            Prev
                        </Button>

                        <span className="text-sm">{pageNumber} / {numPages}</span>

                        <Button
                            onClick={() =>
                            setPageNumber((p) =>
                                Math.min(numPages ? numPages - (numPages % 2 === 0 ? 1 : 0) : p, p + 2)
                            )
                            }
                            disabled={pageNumber >= (numPages ?? 0) - 1}
                        >
                            Next
                        </Button>
                        
                    </div>
                    )}
                </div>
            )}
        </>
    );
}