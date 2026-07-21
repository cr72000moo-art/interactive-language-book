interface PDFViewerProps {
  pageNumber: number
}

function PDFViewer({ pageNumber }: PDFViewerProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-2">محاكاة عارض PDF</p>
        <p className="text-gray-400">الصفحة: {pageNumber}</p>
        <p className="text-sm text-gray-400 mt-4">سيتم عرض PDF هنا</p>
      </div>
    </div>
  )
}

export default PDFViewer
