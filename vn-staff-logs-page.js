export function renderVnStaffLogsPage(container, navigate) {
    container.innerHTML = `
    <div class="max-w-4xl mx-auto py-8 px-6 animate-in slide-in-from-right duration-500">
        <button 
          id="back-to-dashboard"
          class="flex items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors mb-8 font-bold text-xs uppercase tracking-widest"
        >
          <chevron-left-icon class="w-4 h-4"></chevron-left-icon> Back to Dashboard
        </button>

        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 class="text-3xl font-serif font-bold text-slate-800 flex items-center gap-3">
              VN Staff Coordination <briefcase-icon class="w-7 h-7 text-indigo-600"></briefcase-icon>
            </h2>
            <p class="text-slate-400 mt-1">Autonomous Business Management via Zalo</p>
          </div>
          <div class="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-100">
            <zap-icon class="w-4 h-4 fill-white"></zap-icon> CEO-Agent Active
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Zalo Conversation Mockup -->
          <div class="lg:col-span-2 space-y-4">
            <div class="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden flex flex-col h-[500px]">
              <!-- Chat Header -->
              <div class="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-xs border border-indigo-200">
                    NH
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-800">Nguyen Hoang (VN Operations)</p>
                    <p class="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter">Online</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="p-2 text-slate-400 hover:text-indigo-600"><phone-icon class="w-4 h-4"></phone-icon></button>
                  <button class="p-2 text-slate-400 hover:text-indigo-600"><more-horizontal-icon class="w-4 h-4"></more-horizontal-icon></button>
                </div>
              </div>

              <!-- Message Area -->
              <div class="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/30">
                <div class="flex flex-col gap-1 items-end">
                  <div class="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-md">
                    Hi Nguyen. Director is heading to a priority family medical appointment for Ava at 14:00. I have rescheduled the Weekly Sync to tomorrow 09:00 VN time.
                  </div>
                  <span class="text-[10px] text-slate-400 font-medium">13:45 • Sent by CEO-Agent</span>
                </div>

                <div class="flex flex-col gap-1 items-end">
                  <div class="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-md">
                    Please proceed with the internal review without her. Ensure the session is recorded and the transcript is uploaded to our shared Drive. I will process the summary for her tonight.
                  </div>
                  <span class="text-[10px] text-slate-400 font-medium">13:46 • Sent by CEO-Agent</span>
                </div>

                <div class="flex flex-col gap-1 items-start">
                  <div class="bg-white border border-slate-100 text-slate-700 p-4 rounded-2xl rounded-tl-none text-sm max-w-[80%] shadow-sm">
                    Understood. I'll inform the team. Hope everything is okay with Ava. I'll set up the recording now.
                  </div>
                  <span class="text-[10px] text-slate-400 font-medium">13:50 • Received</span>
                </div>

                <div class="flex flex-col gap-1 items-end">
                  <div class="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-md">
                    Thank you, Nguyen. I've also updated the project timeline to reflect these changes.
                  </div>
                  <span class="text-[10px] text-slate-400 font-medium">13:52 • Sent by CEO-Agent</span>
                </div>
              </div>

              <!-- Input Simulation -->
              <div class="p-4 bg-white border-t border-slate-100 flex gap-2">
                <div class="flex-1 bg-slate-50 rounded-full px-4 py-2 text-xs text-slate-400 flex items-center italic">
                  AI is managing this conversation...
                </div>
                <button class="bg-indigo-100 text-indigo-600 p-2 rounded-full"><send-icon class="w-4 h-4"></send-icon></button>
              </div>
            </div>
          </div>

          <!-- Sidebar Logic/Status -->
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Autonomous Tasks</h4>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-600 font-medium">Zalo Notification</span>
                  <span class="text-[10px] font-bold text-emerald-500">Completed</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-600 font-medium">Calendar Conflict</span>
                  <span class="text-[10px] font-bold text-emerald-500">Resolved</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-600 font-medium">Recording Trigger</span>
                  <span class="text-[10px] font-bold text-indigo-500 underline">Monitoring</span>
                </div>
              </div>
            </div>

            <div class="bg-slate-900 p-6 rounded-[2rem] text-white">
              <h4 class="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <zap-icon class="w-3 h-3 fill-indigo-400"></zap-icon> Decision Logic
              </h4>
              <p class="text-xs font-light text-slate-400 leading-relaxed italic">
                "Conflict detected: [Business Sync] vs [Medical Appt]. Rule: Family_Priority_High. Action: Postpone business, delegate recording, notify Lead via preferred channel (Zalo)."
              </p>
            </div>

            <div class="bg-indigo-50 p-6 rounded-[2.5rem] border border-indigo-100">
              <h4 class="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2">Staff Feedback</h4>
              <p class="text-xs text-slate-600 leading-relaxed font-medium">
                "The team responded well to the automation. Nguyen has already initiated the Zoom recording."
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('back-to-dashboard').addEventListener('click', () => navigate('dashboard'));
}
