export function renderLandingPage(container, navigate) {
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 animate-in fade-in duration-700">
            <div class="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-200">
                <shield-check-icon class="w-10 h-10 text-white"></shield-check-icon>
            </div>
            <h1 class="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6 leading-tight">
                Your Life, <br/><span class="text-indigo-600 italic">Orchestrated.</span>
            </h1>
            <p class="text-lg text-slate-500 max-w-md mb-10 leading-relaxed">
                The first AI agent designed for high-context lives. One PA to manage your family, business, and self across every role.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <button id="start-journey" class="bg-slate-900 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
                    Start Journey <arrow-right-icon class="w-5 h-5"></arrow-right-icon>
                </button>
                <button class="border border-slate-200 text-slate-600 px-10 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all"> View Enterprise Plans </button>
            </div>
            <p class="mt-8 text-sm text-slate-400 font-medium flex items-center gap-2">
                <lock-icon class="w-4 h-4"></lock-icon> End-to-end encrypted life management
            </p>
        </div>
    `;

    document.getElementById('start-journey').addEventListener('click', () => navigate('login'));
}
