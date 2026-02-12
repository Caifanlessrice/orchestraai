export function renderAvaSchedulePage(container, navigate) {
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
              Ava's Daily Schedule <baby-icon class="w-7 h-7 text-indigo-600"></baby-icon>
            </h2>
            <p class="text-slate-400 mt-1">Thursday, Feb 12th, 2026</p>
          </div>
          <div class="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
            <check-circle-2-icon class="w-4 h-4"></check-circle-2-icon> Mother Agent Monitoring Active
          </div>
        </div>

        <div class="space-y-4">
          <!-- Timeline Entry 1 -->
          <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start relative overflow-hidden group">
            <div class="w-16 flex flex-col items-center">
              <span class="text-sm font-black text-slate-800">08:30</span>
              <div class="w-px h-16 bg-slate-100 my-2"></div>
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-slate-800">School Drop-off</h4>
              <div class="flex items-center gap-4 mt-2 text-xs text-slate-400">
                <span class="flex items-center gap-1"><map-pin-icon class="w-3 h-3"></map-pin-icon> International Primary</span>
                <span class="flex items-center gap-1 font-bold text-emerald-500"><check-circle-2-icon class="w-3 h-3"></check-circle-2-icon> Completed</span>
              </div>
              <div class="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <zap-icon class="w-3 h-3 text-indigo-500 fill-indigo-500"></zap-icon>
                  <span class="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">AI Auto-Log: Drop-off confirmed via geofence.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Entry 2 - HIGHLIGHTED -->
          <div class="bg-indigo-50/30 p-8 rounded-[2rem] border-2 border-indigo-100 shadow-sm flex gap-6 items-start relative group ring-4 ring-indigo-500/5">
            <div class="w-16 flex flex-col items-center">
              <span class="text-sm font-black text-indigo-600">14:00</span>
              <div class="w-px h-24 bg-indigo-200 my-2"></div>
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-black text-lg text-slate-800">Pediatric Follow-up</h4>
                  <p class="text-sm text-indigo-600 font-medium mt-1 italic">Conflict Resolved by PA</p>
                </div>
                <div class="p-3 bg-white rounded-2xl shadow-sm border border-indigo-100">
                  <clock-icon class="w-5 h-5 text-indigo-600"></clock-icon>
                </div>
              </div>
              <div class="flex items-center gap-4 mt-3 text-xs text-slate-500">
                <span class="flex items-center gap-1 font-bold"><map-pin-icon class="w-3 h-3 text-indigo-400"></map-pin-icon> City Medical Center</span>
                <span class="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-indigo-100">Dr. Sarah Thompson</span>
              </div>
              
              <!-- AI Intervention Details -->
              <div class="mt-6 space-y-3">
                <div class="bg-white p-4 rounded-2xl border border-indigo-100 flex items-start gap-3 shadow-sm">
                  <zap-icon class="w-4 h-4 text-indigo-600 mt-1 fill-indigo-600"></zap-icon>
                  <div>
                    <p class="text-xs font-bold text-slate-700 uppercase tracking-tighter">AI Orchestration Log</p>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                      "I cross-referenced the Pediatric Portal. Your check-in is <span class="text-indigo-600 font-bold underline">pre-authorized</span>. Transportation is booked for 13:30. I've sent the clinic route to your driver."
                    </p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="flex-1 bg-indigo-600 text-white text-[10px] font-bold py-2 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                    View Portal <external-link-icon class="w-3 h-3"></external-link-icon>
                  </button>
                  <button class="flex-1 bg-white border border-indigo-100 text-indigo-600 text-[10px] font-bold py-2 rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                    Message Clinic
                  </button>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4 animate-pulse">
              <div class="w-2 h-2 rounded-full bg-indigo-600"></div>
            </div>
          </div>

          <!-- Timeline Entry 3 -->
          <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start relative opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <div class="w-16 flex flex-col items-center">
              <span class="text-sm font-black text-slate-800">16:30</span>
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-slate-800">Gymnastics Practice</h4>
              <div class="flex items-center gap-4 mt-2 text-xs text-slate-400">
                <span class="flex items-center gap-1"><map-pin-icon class="w-3 h-3"></map-pin-icon> Elite Sports Club</span>
                <span class="flex items-center gap-1 italic">Upcoming</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Insight Box -->
        <div class="mt-10 bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row gap-6 items-center">
          <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <shield-check-icon class="w-8 h-8 text-white"></shield-check-icon>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h4 class="text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-1">PA Security Insight</h4>
            <p class="text-sm font-light text-slate-300 leading-relaxed">
              "I am monitoring Ava's school portal for any emergency alerts. I have also verified your father's medication adherence—his 1:00 PM dose was logged as taken."
            </p>
          </div>
          <button class="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">
            Mute Alerts
          </button>
        </div>
      </div>
    `;

    document.getElementById('back-to-dashboard').addEventListener('click', () => navigate('dashboard'));
}
