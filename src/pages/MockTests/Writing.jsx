import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, ChartBarIcon, DocumentTextIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Timer from '../../components/Timer';
import task1 from '../../../img/mock test 1/writingtask1.png';

const Writing = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [activeTask, setActiveTask] = useState(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const [textareaValue, setTextareaValue] = useState(''); // State for textarea content

  const mockTest = {
    title: "Writing Mock Test 1",
    tasks: [
      {
        id: 1,
        title: "Task 1: Academic Report",
        duration: "20 minutes",
        wordCount: "150 words minimum",
        description: "You should spend about 20 minutes on this task.",
        prompt: `The graph below gives information about the sales of the three most commonly
purchased items in a particular bakery for the year 2014.
Summarise the information by selecting and reporting the main features, and make
comparisons where relevant.`,
        imageUrl: task1,
        tips: [
          "Spend no more than 20 minutes on this task",
          "Write at least 150 words",
          "Study the graph carefully before writing",
          "Include an introduction, overview, and key details",
          "Use appropriate language to describe trends"
        ]
      },
      {
        id: 2,
        title: "Task 2: Essay",
        duration: "40 minutes",
        wordCount: "250 words minimum",
        description: "You should spend about 40 minutes on this task.",
        prompt: `The internet has changed the way we communicate. Much communication today
happens through social media. Some people support this and think it is a positive
development. Others believe that social media have negative effects.
Discuss both these views and give your own opinion.`,
        tips: [
          "Spend no more than 40 minutes on this task",
          "Write at least 250 words",
          "Plan your essay before writing",
          "Include an introduction, body paragraphs, and conclusion",
          "Support your arguments with examples"
        ]
      }
    ]
  };

  const handleTimeUp = () => {
    alert("Time's up! Please submit your writing tasks.");
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTextareaValue(text); // Update textarea value
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length); // Update word count
  };

  const handleTaskSwitch = (taskId) => {
    setActiveTask(taskId);
    setTextareaValue(''); // Reset textarea value when switching tasks
    setWordCount(0); // Reset word count
  };

  const currentTask = mockTest.tasks[activeTask - 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {showInstructions ? (
        <div className="max-w-2xl mx-auto">
          <Link
            to="/mock-tests"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Mock Tests
          </Link>
          <h1 className="text-3xl font-bold mb-6">IELTS Writing Test Instructions</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <p className="text-gray-700">
              <strong>Duration:</strong> 60 minutes (20 minutes for Task 1, 40 minutes for Task 2)
            </p>
            <p className="text-gray-700">
              <strong>Tasks:</strong> 2 tasks (Report/Letter + Essay)
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Important Information:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You should manage your time carefully between the two tasks.</li>
                <li>Task 1 requires a minimum of 150 words.</li>
                <li>Task 2 requires a minimum of 250 words and carries more weight.</li>
                <li>Time will start automatically when you begin the test.</li>
                <li>Your answers will be automatically saved as you type.</li>
              </ul>
            </div>
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <>
          <Timer duration={60} onTimeUp={handleTimeUp} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 mt-16"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">{mockTest.title}</h1>
                <p className="text-gray-500">Test ID: {testId}</p>
              </div>

              {/* Task Navigation */}
              <div className="flex space-x-4 mb-8">
                {mockTest.tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => handleTaskSwitch(task.id)} // Use handleTaskSwitch
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTask === task.id
                        ? 'bg-sky-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-sky-50 hover:text-sky-600'
                    }`}
                  >
                    {task.id === 1 ? (
                      <ChartBarIcon className="w-5 h-5 mr-2" />
                    ) : (
                      <DocumentTextIcon className="w-5 h-5 mr-2" />
                    )}
                    Task {task.id}
                  </button>
                ))}
              </div>

              {/* Task Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Task Information */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-sky-50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      {currentTask.title}
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <ClockIcon className="w-5 h-5 mr-2" />
                        <span>Suggested time: {currentTask.duration}</span>
                      </div>
                      <p className="text-gray-600">
                        Word count: {currentTask.wordCount}
                      </p>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Writing Tips</h3>
                    <ul className="space-y-2">
                      {currentTask.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-5 h-5 bg-sky-100 text-sky-600 rounded-full text-sm flex items-center justify-center mr-2 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Writing Area */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Task Description and Prompt */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-600 mb-4">{currentTask.description}</p>
                    <p className="text-gray-900 font-medium mb-6">{currentTask.prompt}</p>
                    {currentTask.id === 1 && currentTask.imageUrl && (
                      <img
                        src={currentTask.imageUrl}
                        alt="Task 1 Graph"
                        className="w-full rounded-lg mb-6"
                      />
                    )}
                  </div>

                  {/* Text Editor */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <textarea
                      className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="Write your response here..."
                      value={textareaValue} // Bind textarea value
                      onChange={handleTextChange} // Add onChange handler
                    />
                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                      <span>Word count: {wordCount}</span> {/* Display word count */}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="mt-8 flex justify-end">
                    {activeTask === 1 ? (
                      <button
                        onClick={() => handleTaskSwitch(2)} // Use handleTaskSwitch
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Continue to Task 2
                      </button>
                    ) : (
                      <Link
                        to={`/mock-tests/${testId}/speaking`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Continue to Speaking Section
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Writing;