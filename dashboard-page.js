export function renderDashboardPage(container, navigate) {
    container.innerHTML = `
    <div class="max-w-4xl mx-auto py-8 px-6 animate-in fade-in duration-1000">
        <header class="flex justify-between items-center mb-10">
          <div>
            <h1 class="text-2xl font-serif font-bold text-slate-800 tracking-tight">
              Welcome back, Madam
            </h1>
            <div class="flex items-center gap-2 mt-1">
              <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Orchestrator Active</p>
            </div>
          </div>
          <div class="flex gap-3">
            <button class="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors text-slate-600"><search-icon class="w-5 h-5"></search-icon></button>
            <button class="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors text-slate-600"><settings-icon class="w-5 h-5"></settings-icon></button>
            <div class="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-indigo-100">
              <user-circle-2-icon class="w-6 h-6 text-white"></user-circle-2-icon>
            </div>
          </div>
        </header>

        <!-- Smart Summary Card -->
        <div class="bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 rounded-[2.5rem] p-8 md:p-10 text-white mb-8 shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-6">
              <h3 class="text-indigo-200 font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                <shield-check-icon class="w-4 h-4 text-indigo-400"></shield-check-icon> Daily Executive Briefing
              </h3>
              <span class="text-[10px] bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">Synced: Now</span>
            </div>
            <p class="text-xl md:text-3xl font-light mb-8 leading-relaxed max-w-2xl">
              "Today is fully synchronized. I identified a <span class="font-bold underline decoration-indigo-400 decoration-2 underline-offset-8">time conflict</span> at 2:00 PM. I moved your Sync and notified your Vietnam staff to handle the recording. Ava's clinic check-in is secured."
            </p>
            <div class="flex flex-wrap gap-4">
              <button 
                id="ava-schedule-btn"
                class="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border border-white/10"
              >
                <calendar-icon class="w-4 h-4"></calendar-icon> View Ava's Schedule
              </button>
              <button 
                id="vn-staff-logs-btn"
                class="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border border-white/10"
              >
                <message-square-icon class="w-4 h-4"></message-square-icon> Review Zalo/VN Sync
              </button>
              <button 
                id="parents-health-btn"
                class="bg-white text-indigo-900 px-6 py-3 rounded-2xl text-xs font-bold shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2"
              >
                <heart-icon class="w-4 h-4"></heart-icon> Parents' Health Portal
              </button>
            </div>
          </div>
          <div class="absolute top-[-50px] right-[-50px] w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] group-hover:bg-indigo-400/30 transition-colors duration-1000"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Autonomous Actions -->
          <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-3">
                <div class="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><zap-icon class="w-5 h-5 fill-emerald-600"></zap-icon></div>
                <h4 class="font-bold text-slate-800">Autonomous Actions</h4>
              </div>
              <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-wider">Live</span>
            </div>
            <ul class="space-y-6">
              <li class="flex gap-4 items-start">
                <div class="w-6 h-6 mt-1 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <check-circle-2-icon class="w-3.5 h-3.5 text-emerald-600"></check-circle-2-icon>
                </div>
                <div>
                  <p class="text-sm font-bold text-slate-800">Hospital Portal Sync</p>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">Cross-referenced Ava's patient ID with clinical calendar. No manual action required.</p>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-6 h-6 mt-1 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 border border-amber-100">
                  <message-square-icon class="w-3.5 h-3.5 text-amber-600"></message-square-icon>
                </div>
                <div>
                  <p class="text-sm font-bold text-slate-800">VN Staff Coordination</p>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">Automated Zalo update sent to HR leads regarding your 2:00 PM role transition.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Agent Cross-Talk Console -->
          <div class="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div class="flex items-center gap-3 mb-8 relative z-10">
              <div class="p-3 bg-white/5 text-indigo-400 rounded-2xl"><database-icon class="w-5 h-5"></database-icon></div>
              <h4 class="font-bold text-white">Agent Cross-Talk</h4>
            </div>
            <div class="font-mono text-[10px] leading-loose relative z-10">
              <div class="flex gap-2 mb-2">
                <span class="text-emerald-400">[CEO-Agent]</span>
                <span class="text-slate-300">&gt; Conflict at 14:00. Requesting priority override...</span>
              </div>
              <div class="flex gap-2 mb-2 opacity-60">
                <span class="text-indigo-400">[Mother-Agent]</span>
                <span class="text-slate-400">&gt; Priority granted. Ava's medical appt locked.</span>
              </div>
              <div class="flex gap-2 mb-2">
                <span class="text-emerald-400">[CEO-Agent]</span>
                <span class="text-slate-300">&gt; Drafting Zalo automated report for Vietnam team...</span>
              </div>
              <div class="flex gap-2">
                <span class="text-indigo-400">[Mother-Agent]</span>
                <span class="text-slate-300">&gt; Syncing father's HL7 health records... Success.</span>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
            <button class="w-full mt-6 py-3 text-xs font-bold text-indigo-300 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors relative z-10 border border-white/5">
              Expand Logic Log
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('ava-schedule-btn').addEventListener('click', () => navigate('ava-schedule'));
    document.getElementById('vn-staff-logs-btn').addEventListener('click', () => navigate('vn-staff-logs'));
    document.getElementById('parents-health-btn').addEventListener('click', () => navigate('parents-health'));
}
