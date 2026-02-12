export function renderRolesPage(container, navigate) {
    container.innerHTML = `
    <div class="max-w-2xl mx-auto py-12 px-6 animate-in zoom-in duration-500 relative">
        <h2 class="text-3xl font-serif font-bold mb-2 text-center">Define Your Roles</h2>
        <p class="text-slate-500 text-center mb-10">Select or create the life segments you need AI to orchestrate.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div class="p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group border-indigo-600 bg-indigo-50/50 shadow-md ring-1 ring-indigo-600">
                <div class="absolute top-3 right-3"><check-circle-2-icon class="w-5 h-5 text-indigo-600"></check-circle-2-icon></div>
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-indigo-600 text-white">
                    <baby-icon class="w-6 h-6"></baby-icon>
                </div>
                <h3 class="font-bold text-lg text-slate-800">The Mother</h3>
                <p class="text-sm text-slate-500">Ava's health, school, & activities</p>
            </div>
            <div class="p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group border-slate-100 hover:border-slate-300 bg-white">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-slate-100 text-slate-600">
                    <briefcase-icon class="w-6 h-6"></briefcase-icon>
                </div>
                <h3 class="font-bold text-lg text-slate-800">The CEO</h3>
                <p class="text-sm text-slate-500">Company sync & VN staff coordination</p>
            </div>
            <div class="p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group border-slate-100 hover:border-slate-300 bg-white">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-slate-100 text-slate-600">
                    <users-icon class="w-6 h-6"></users-icon>
                </div>
                <h3 class="font-bold text-lg text-slate-800">The Daughter</h3>
                <p class="text-sm text-slate-500">Parents' health & medical alerts</p>
            </div>
            <div class="p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group border-slate-100 hover:border-slate-300 bg-white">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-slate-100 text-slate-600">
                    <heart-icon class="w-6 h-6"></heart-icon>
                </div>
                <h3 class="font-bold text-lg text-slate-800">Self Care</h3>
                <p class="text-sm text-slate-500">Personal health, fitness, & schedule</p>
            </div>
            <div class="p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-indigo-50/20 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-all min-h-[160px]">
                <plus-circle-icon class="w-8 h-8 mb-2"></plus-circle-icon>
                <span class="text-sm font-medium">Add Custom Role</span>
            </div>
        </div>

        <button 
            id="activate-orchestrator"
            class="w-full p-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all bg-slate-900 text-white shadow-xl hover:bg-slate-800"
        >
            Activate My Orchestrator <zap-icon class="w-5 h-5 fill-current"></zap-icon>
        </button>
    </div>
    `;

    document.getElementById('activate-orchestrator').addEventListener('click', () => navigate('dashboard'));
}
