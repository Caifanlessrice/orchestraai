export function renderGenderPage(container, navigate) {
    container.innerHTML = `
        <div class="max-w-md mx-auto py-12 px-6 animate-in slide-in-from-right duration-500">
            <h2 class="text-3xl font-serif font-bold mb-4 text-center">Persona</h2>
            <p class="text-slate-500 text-center mb-8">Helps AI adjust tone and physiological tracking parameters.</p>
            <div class="grid grid-cols-1 gap-4">
                ${['Female', 'Male', 'Non-binary', 'Prefer not to say'].map((g) => `
                    <button 
                        key=${g}
                        class="gender-option p-5 text-left border border-slate-200 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50/30 transition-all flex justify-between items-center group"
                    >
                        <span class="text-lg font-medium text-slate-700">${g}</span>
                        <chevron-right-icon class="w-5 h-5 text-slate-300 group-hover:text-indigo-600"></chevron-right-icon>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    document.querySelectorAll('.gender-option').forEach(button => {
        button.addEventListener('click', () => {
            // You can store the selected gender here if needed
            navigate('roles');
        });
    });
}
