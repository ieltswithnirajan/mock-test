import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Timer from '../../components/Timer';

const Listening = () => {
  const { testId } = useParams();
  const [showInstructions, setShowInstructions] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const handleTimeUp = () => {
    alert("Time's up! Please submit your answers.");
  };

  const handlePlayPause = () => {
    const audio = document.getElementById('listening-audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    const audio = e.target;
    setAudioCurrentTime(audio.currentTime);
    setAudioProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = (e) => {
    setAudioDuration(e.target.duration);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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
            to={`/mock-tests/${testId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Mock Test
          </Link>
          <h1 className="text-3xl font-bold mb-6">IELTS Listening Test Instructions</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <p className="text-gray-700">
              <strong>Duration:</strong> 30 minutes + 10 minutes transfer time
            </p>
            <p className="text-gray-700">
              <strong>Questions:</strong> 40 questions
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Important Information:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You will hear the recording ONLY ONCE.</li>
                <li>The test is divided into 4 sections.</li>
                <li>Time will start automatically when you begin the test.</li>
                <li>Your answers will be automatically saved as you type.</li>
                <li>After the audio ends, you will have 10 minutes to transfer your answers.</li>
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
        <div className="max-w-4xl mx-auto">
          <Timer duration={40} onTimeUp={handleTimeUp} />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IELTS Listening Test</h2>
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${audioProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {formatTime(audioCurrentTime)} / {formatTime(audioDuration)}
                  </div>
                </div>
              </div>
            </div>
            <audio
              id="listening-audio"
              src="/audio/mocktest1.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              autoPlay
            />
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">SECTION 1</h3>
              <p className="text-gray-700 mb-6">Questions 1–10</p>
              <p className="text-gray-700 mb-6">Questions 1–5</p>
              <p className="text-gray-700 mb-4">Complete the notes below:</p>
              <p className="text-gray-700 mb-4">Write NO MORE THAN THREE WORDS for each answer.</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-4">Transport from Airport to Milton</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-32 font-medium">Example</span>
                    <span className="w-32 font-medium">Answer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32">Distance:</span>
                    <span className="w-32">147 miles</span>
                  </div>
                  <div className="mt-6">
                    <p className="font-medium mb-2">Options:</p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Car hire</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>don't want to drive</li>
                          <li>1 ...............................</li>
                          <li>expensive</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Greyhound bus</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>$15 single, $27.50 return</li>
                          <li>direct to the 2 ...............................</li>
                          <li>long 3 ...............................</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Airport Shuttle</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>4 ............................... service</li>
                          <li>every 2 hours</li>
                          <li>$35 single, $65 return</li>
                          <li>need to 5 ...............................</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-700 mb-6">Questions 6–10</p>
                <p className="text-gray-700 mb-4">Complete the booking form below:</p>
                <p className="text-gray-700 mb-4">Write ONE WORD AND/OR A NUMBER for each answer.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">AIRPORT SHUTTLE BOOKING FORM</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-medium">To:</div>
                      <div>Milton</div>
                      
                      <div className="font-medium">Date:</div>
                      <div>6 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></div>
                      
                      <div className="font-medium">Bus Time:</div>
                      <div>7 <span className="border-b-2 border-gray-300 w-32 inline-block"></span> pm</div>
                      
                      <div className="font-medium">Name:</div>
                      <div>Janet 8 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></div>
                      
                      <div className="font-medium">Flight No:</div>
                      <div>9 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></div>
                      
                      <div className="font-medium">From:</div>
                      <div>London Heathrow</div>
                      
                      <div className="font-medium">Address in Milton:</div>
                      <div>Vacation Motel, 24, Kitchener Street</div>
                      
                      <div className="font-medium">No. of passengers:</div>
                      <div>One</div>
                      
                      <div className="font-medium">Type of ticket:</div>
                      <div>Single</div>
                      
                      <div className="font-medium">Fare:</div>
                      <div>$35</div>
                      
                      <div className="font-medium">Credit Card No:</div>
                      <div>(Visa) 10 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">SECTION 2</h3>
              <p className="text-gray-700 mb-6">Questions 11–20</p>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-4">Questions 11–16</p>
                  <p className="text-gray-700 mb-4">Choose the correct letter, A, B or C.</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">11 PS Camping has been organising holidays for</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q11" value="A" className="mr-2" />
                          A 15 years.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q11" value="B" className="mr-2" />
                          B 20 years.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q11" value="C" className="mr-2" />
                          C 25 years.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">12 The company has most camping sites in</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q12" value="A" className="mr-2" />
                          A France.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q12" value="B" className="mr-2" />
                          B Italy.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q12" value="C" className="mr-2" />
                          C Switzerland.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">13 Which organised activity can children do every day of the week?</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q13" value="A" className="mr-2" />
                          A football
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q13" value="B" className="mr-2" />
                          B drama
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q13" value="C" className="mr-2" />
                          C model making
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">14 Some areas of the sites have a 'no noise' rule after</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q14" value="A" className="mr-2" />
                          A 9.30 p.m.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q14" value="B" className="mr-2" />
                          B 10.00 p.m.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q14" value="C" className="mr-2" />
                          C 10.30 p.m.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">15 The holiday insurance that is offered by PS Camping</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q15" value="A" className="mr-2" />
                          A can be charged on an annual basis.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q15" value="B" className="mr-2" />
                          B is included in the price of the holiday.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q15" value="C" className="mr-2" />
                          C must be taken out at the time of booking.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">16 Customers who recommend PS Camping to friends will receive</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q16" value="A" className="mr-2" />
                          A a free gift.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q16" value="B" className="mr-2" />
                          B an upgrade to a luxury tent.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q16" value="C" className="mr-2" />
                          C a discount.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">Questions 17–20</p>
                  <p className="text-gray-700 mb-4">What does the speaker say about the following items?</p>
                  <p className="text-gray-700 mb-4">Write the correct letter, A, B or C, next to questions 17–20.</p>
                  <div className="space-y-2 mb-4">
                    <p>A They are provided in all tents.</p>
                    <p>B They are found in central areas of the campsite.</p>
                    <p>C They are available on request.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">17 barbecues <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">18 toys <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">19 cool boxes <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">20 mops and buckets <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">SECTION 3</h3>
              <p className="text-gray-700 mb-6">Questions 21–30</p>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-4">Questions 21–23</p>
                  <p className="text-gray-700 mb-4">Complete the notes below.</p>
                  <p className="text-gray-700 mb-4">Write ONE WORD ONLY for each answer.</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-4">DIFFERENCES BETWEEN INDIVIDUALS IN THE WORKPLACE</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Individuals bring different:</p>
                        <div className="ml-4 space-y-2">
                          <p>ideas</p>
                          <p>21 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                          <p>learning experiences</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Work behaviour differences are due to:</p>
                        <div className="ml-4 space-y-2">
                          <p>personality</p>
                          <p>22 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Effects of diversity on companies:</p>
                        <div className="ml-4 space-y-2">
                          <p>Advantage: diversity develops 23 <span className="border-b-2 border-gray-300 w-32 inline-block"></span></p>
                          <p>Disadvantage: diversity can cause conflict</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">Questions 24–27</p>
                  <p className="text-gray-700 mb-4">Choose the correct letter, A, B or C.</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">24 Janice thinks that employers should encourage workers who are</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q24" value="A" className="mr-2" />
                          A potential leaders.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q24" value="B" className="mr-2" />
                          B open to new ideas.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q24" value="C" className="mr-2" />
                          C good at teamwork.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">25 Janice suggests that managers may find it difficult to</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q25" value="A" className="mr-2" />
                          A form successful groups.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q25" value="B" className="mr-2" />
                          B balance conflicting needs.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q25" value="C" className="mr-2" />
                          C deal with uncooperative workers.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">26 Janice believes employers should look for job applicants who</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q26" value="A" className="mr-2" />
                          A can think independently.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q26" value="B" className="mr-2" />
                          B will obey the system.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q26" value="C" className="mr-2" />
                          C can solve problems.
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">27 Janice believes managers should</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="q27" value="A" className="mr-2" />
                          A demonstrate good behaviour.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q27" value="B" className="mr-2" />
                          B encourage co-operation early on.
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="q27" value="C" className="mr-2" />
                          C increase financial incentives.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">Questions 28–30</p>
                  <p className="text-gray-700 mb-4">Complete the sentences below.</p>
                  <p className="text-gray-700 mb-4">Write ONE WORD ONLY for each answer.</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">28 All managers need to understand their employees and recognise their company's <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">29 When managing change, increasing the company's <span className="border-b-2 border-gray-300 w-32 inline-block"></span> may be more important than employee satisfaction.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">30 During periods of change, managers may have to cope with increased amounts of <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">SECTION 4</h3>
              <p className="text-gray-700 mb-6">Questions 31–40</p>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-4">Questions 31–35</p>
                  <p className="text-gray-700 mb-4">Complete the notes below.</p>
                  <p className="text-gray-700 mb-4">Write ONE WORD ONLY for each answer.</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-4">SEMINAR ON ROCK ART</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="mb-2">Preparation for fieldwork trip to Namibia in 31 <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Rock art in Namibia may be</p>
                        <div className="ml-4 space-y-2">
                          <p>paintings</p>
                          <p>engravings</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Earliest explanation of engravings of animal footprints</p>
                        <div className="ml-4 space-y-2">
                          <p>They were used to help 32 <span className="border-b-2 border-gray-300 w-32 inline-block"></span> learn about tracking</p>
                          <p className="font-medium mt-4">But:</p>
                          <div className="ml-4 space-y-2">
                            <p>Why are the tracks usually 33 <span className="border-b-2 border-gray-300 w-32 inline-block"></span>?</p>
                            <p>Why are some engravings realistic and others unrealistic?</p>
                            <p>Why are the unrealistic animals sometimes half 34 <span className="border-b-2 border-gray-300 w-32 inline-block"></span>?</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2">More recent explanation:</p>
                        <p>Wise men may have been trying to control wild animals with 35 <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Comment:</p>
                        <p>Earlier explanation was due to scholars over-generalising from their experience of a different culture.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">Questions 36–40</p>
                  <p className="text-gray-700 mb-4">Complete the sentences below.</p>
                  <p className="text-gray-700 mb-4">Write ONE WORD ONLY for each answer.</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">36 If you look at a site from a <span className="border-b-2 border-gray-300 w-32 inline-block"></span>, you reduce visitor pressure.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">37 To camp on a site may be disrespectful to people from that <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">38 Undiscovered material may be damaged by <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">39 You should avoid <span className="border-b-2 border-gray-300 w-32 inline-block"></span> or tracing rock art as it is so fragile.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">40 In general, your aim is to leave the site <span className="border-b-2 border-gray-300 w-32 inline-block"></span>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Link
                to={`/mock-tests/${testId}/reading`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Reading Section
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Listening; 