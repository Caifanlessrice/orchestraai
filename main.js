import './icons.js';
import { renderLandingPage } from './landing-page.js';
import { renderLoginPage } from './login-page.js';
import { renderGenderPage } from './gender-page.js';
import { renderRolesPage } from './roles-page.js';
import { renderDashboardPage } from './dashboard-page.js';
import { renderAvaSchedulePage } from './ava-schedule-page.js';
import { renderVnStaffLogsPage } from './vn-staff-logs-page.js';
import { renderParentsHealthPage } from './parents-health-page.js';

const app = document.getElementById('app');

let step = 'landing';

function navigate(newStep) {
    step = newStep;
    render();
}

function render() {
    switch (step) {
        case 'landing':
            renderLandingPage(app, navigate);
            break;
        case 'login':
            renderLoginPage(app, navigate);
            break;
        case 'gender':
            renderGenderPage(app, navigate);
            break;
        case 'roles':
            renderRolesPage(app, navigate);
            break;
        case 'dashboard':
            renderDashboardPage(app, navigate);
            break;
        case 'ava-schedule':
            renderAvaSchedulePage(app, navigate);
            break;
        case 'vn-staff-logs':
            renderVnStaffLogsPage(app, navigate);
            break;
        case 'parents-health':
            renderParentsHealthPage(app, navigate);
            break;
        default:
            renderLandingPage(app, navigate);
    }
}

render();
