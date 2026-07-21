import { useState } from 'react'
import Button from './Button'

function ExercisePanel() {
  const [answer, setAnswer] = useState('')

  return (
    <div className="border-t border-gray-200 pt-6">
      <h3 className="font-bold text-gray-800 mb-4">التمرين 1.5</h3>
      <p className="text-gray-600 mb-4">أكمل الجملة:</p>
      <p className="bg-gray-50 p-3 rounded-lg mb-4 text-gray-800">
        Ich heiße _______ und ich bin Student.
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="أدخل إجابتك..."
        className="w-full px-4 py-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-primary"
      />
      <div className="space-y-2">
        <Button className="w-full">تحقق من الإجابة</Button>
        <Button variant="secondary" className="w-full">طلب مساعدة</Button>
      </div>
    </div>
  )
}

export default ExercisePanel
