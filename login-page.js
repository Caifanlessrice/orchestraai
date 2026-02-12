export function renderLoginPage(container, navigate) {
    container.innerHTML = `
        <div class="max-w-md mx-auto py-12 px-6 animate-in slide-in-from-bottom duration-500">
            <h2 class="text-3xl font-serif font-bold mb-2">Identify</h2>
            <p class="text-slate-500 mb-8">Securely connect to your life data.</p>
            
            <div class="space-y-4">
                <button id="google-login" class="w-full flex items-center justify-center gap-3 border border-slate-200 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                    <img src="https://www.google.com/favicon.ico" class="w-5 h-5" alt="Google" />
                    <span class="font-medium text-slate-700">Continue with Google</span>
                </button>
                <button id="apple-login" class="w-full flex items-center justify-center gap-3 border border-slate-200 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <img src="https://www.apple.com/favicon.ico" class="w-5 h-5" alt="Apple" />
                    <span class="font-medium text-slate-700">Continue with Apple</span>
                </button>
                <div class="relative py-4">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-100"></div></div>
                    <div class="relative flex justify-center text-xs uppercase"><span class="bg-[#FDFCFE] px-2 text-slate-400">Secure Email</span></div>
                </div>
                <input type="email" placeholder="Email address" class="w-full p-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                <button id="email-login" class="w-full bg-indigo-600 text-white p-4 rounded-2xl font-bold">Sign In</button>
            </div>
        </div>
    `;

    document.getElementById('google-login').addEventListener('click', () => navigate('gender'));
    document.getElementById('apple-login').addEventListener('click', () => navigate('gender'));
    document.getElementById('email-login').addEventListener('click', () => navigate('gender'));
}
