// Sidebar.js
import React from 'react'

const contacts = [
    {name: 'Ricardo Lopez', time: '11:23 am', message: 'How are u???'},
    {name: 'Frederick Byrd', time: '10:11 am', message: 'What time will be available?'},
    {name: 'Hilda Hansen', time: '08:43 am', message: 'Hi, my name is Hilda Hansen', active: true},
    {name: 'Ryan Underwood', time: '7:11 am', message: 'Thank you so much!'},
    {name: 'Myrtie Diaz', time: 'Yesterday', message: 'Hope to see you soon!'},
]

function MainContent() {
    return (
        <div className="flex-1 flex flex-col h-[80vh] bg-white">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="text-lg font-semibold">Hilda Hansen</div>
                <div className="space-x-4">
                    <button>📞</button>
                    <button>📹</button>
                    <button>❌</button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"/>
                    <div>
                        <div className="bg-(--color-primary) text-white p-3 rounded-xl max-w-md">
                            Hello, my name is Hilda Hansen. I’m planning to install a kitchen sink basin today. Have you
                            done that before?
                        </div>
                        <div className="text-xs text-gray-500 mt-1">07:44 am</div>
                    </div>
                </div>

                <div className="flex items-start justify-end gap-2">
                    <div>
                        <div className="bg-gray-200 text-black p-3 rounded-xl max-w-md">
                            Hello, yes I have!
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">08:43 am</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300"/>
                </div>

                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"/>
                    <div>
                        <div className="bg-(--color-primary) text-white p-3 rounded-xl max-w-md">
                            I’ve already purchased the new basin, and I’m hoping to get it installed sometime this week
                            if possible. I’m not very handy with plumbing, so I’d rather have a professional handle it.
                        </div>
                        <div className="text-xs text-gray-500 mt-1">08:43 am</div>
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"/>
                    <div>
                        <div className="bg-(--color-primary) text-white p-3 rounded-xl max-w-md">
                            Do you offer that kind of service? And if so, could you give me an idea of the cost and
                            availability?
                        </div>
                        <div className="text-xs text-gray-500 mt-1">08:44 am</div>
                    </div>
                </div>

            </div>

            <div className="p-4 border-t flex items-center">
                <input type="text" placeholder="Type something" className="flex-1 px-4 py-2 border rounded"/>
                <button className="ml-2 text-indigo-600">➤</button>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <div className="py-20 flex font-sans">
            <MainContent/>
        </div>
    )
}
