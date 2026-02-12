export function renderParentsHealthPage(container, navigate) {
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
              Parents' Health Portal <users-icon class="w-7 h-7 text-indigo-600"></users-icon>
            </h2>
            <p class="text-slate-400 mt-1">Real-time health monitoring & HL7 Data Sync</p>
          </div>
          <div class="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-indigo-100">
            <shield-check-icon class="w-4 h-4"></shield-check-icon> Daughter Agent Syncing
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Father's Profile -->
          <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-2xl font-black text-slate-400 border-2 border-slate-50">
                JD
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Father (John)</h3>
                <p class="text-xs text-emerald-500 font-bold uppercase tracking-widest">Stable</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-slate-50 p-4 rounded-2xl">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><heart-icon class="w-3 h-3 text-rose-400"></heart-icon> Heart Rate</p>
                <p class="text-xl font-black text-slate-800">72 <span class="text-[10px] font-medium text-slate-400">BPM</span></p>
              </div>
              <div class="bg-slate-50 p-4 rounded-2xl">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><thermometer-icon class="w-3 h-3 text-blue-400"></thermometer-icon> Temp</p>
                <p class="text-xl font-black text-slate-800">36.6 <span class="text-[10px] font-medium text-slate-400">°C</span></p>
              </div>
              <div class="bg-slate-50 p-4 rounded-2xl col-span-2">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><stethoscope-icon class="w-3 h-3 text-indigo-400"></stethoscope-icon> Blood Pressure</p>
                <p class="text-xl font-black text-slate-800">120 / 80 <span class="text-[10px] font-medium text-slate-400">mmHg</span></p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50">
                <h4 class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">Medication Adherence</h4>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-slate-700 font-medium">Lisinopril (10mg)</span>
                  <span class="text-[10px] font-bold text-emerald-600 bg-white px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
                    <check-circle-2-icon class="w-3 h-3"></check-circle-2-icon> Taken 1:00 PM
                  </span>
                </div>
              </div>
            </div>
            
            <div class="absolute top-4 right-4"><div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div></div>
          </div>

          <!-- Mother's Profile -->
          <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-3xl bg-indigo-50 flex items-center justify-center text-2xl font-black text-indigo-300 border-2 border-indigo-50">
                MD
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Mother (Mary)</h3>
                <p class="text-xs text-slate-400 font-bold uppercase tracking-widest italic">Monitoring Active</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-slate-50 p-4 rounded-2xl">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><heart-icon class="w-3 h-3 text-rose-400"></heart-icon> Heart Rate</p>
                <p class="text-xl font-black text-slate-800">68 <span class="text-[10px] font-medium text-slate-400">BPM</span></p>
              </div>
              <div class="bg-slate-50 p-4 rounded-2xl">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><zap-icon class="w-3 h-3 text-amber-400"></zap-icon> Activity</p>
                <p class="text-xl font-black text-slate-800">Light <span class="text-[10px] font-medium text-slate-400">Walk</span></p>
              </div>
              <div class="bg-slate-50 p-4 rounded-2xl col-span-2">
                <p class="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><calendar-icon class="w-3 h-3 text-indigo-400"></calendar-icon> Next Screening</p>
                <p class="text-xl font-black text-slate-800">March 15th <span class="text-[10px] font-medium text-slate-400">Cardiology</span></p>
              </div>
            </div>

            <div class="bg-slate-900 rounded-[1.5rem] p-4 text-xs font-light text-slate-400 leading-relaxed">
              <p class="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">
                <shield-check-icon class="w-3 h-3"></shield-check-icon> AI Insight
              </p>
              "Mary's sleep quality improved by 12% last night. No irregular heart rhythms detected in the last 24h sync."
            </div>
          </div>
        </div>

        <!-- Emergency & Logic Log -->
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Orchestrator Medical Logs</h4>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <database-icon class="w-4 h-4 text-indigo-600"></database-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-slate-800 italic tracking-tight">Synced: HL7 FHIR Hospital Portal</p>
                  <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">"Successfully extracted latest lab results for John. Creatinine levels are stable. No clinical intervention needed."</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <check-circle-2-icon class="w-4 h-4 text-emerald-600"></check-circle-2-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-slate-800 italic tracking-tight">Verified: Smart Pill Dispenser</p>
                  <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">"Verified John's noon dosage via IoT bridge. Logged to Family Health Vault."</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-rose-50 p-8 rounded-[2.5rem] border border-rose-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest mb-4">
                <alert-circle-icon class="w-4 h-4"></alert-circle-icon> Emergency
              </div>
              <p class="text-[10px] text-rose-800 font-medium leading-relaxed">
                If vitals drop below threshold, I will automatically call the Family Clinic and alert your VN staff to handle your current role transitions.
              </p>
            </div>
            <button class="w-full bg-rose-600 text-white font-bold text-[10px] uppercase py-3 rounded-2xl shadow-lg shadow-rose-200 mt-6 transition-all hover:bg-rose-700">
              Update Care Contacts
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('back-to-dashboard').addEventListener('click', () => navigate('dashboard'));
}
