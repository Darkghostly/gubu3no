const cyberProjects = [
    {
        id: 0,
        name: "GuardLog_v1.0",
        shortDesc: "Monitoramento em Python focado em detecção de força bruta via análise de logs SSH.",
        fullDesc: "Ferramenta avançada de defesa que realiza o parsing de logs de autenticação (auth.log) em tempo real. Identifica padrões de ataque de força bruta e bloqueia IPs atacantes automaticamente interagindo com o firewall iptables. Gera relatórios em JSON e envia alertas via webhook para Discord/Slack.\n\nPrincipais desafios: Otimização de leitura de arquivos grandes e evitar condições de corrida na aplicação de regras de firewall.",
        techs: "Python | Iptables | Regex | Webhooks",
        deployLink: null,
        githubLink: "https://github.com/seu-usuario/guardlog"
    },
    {
        id: 1,
        name: "OSINT_Toolkit_Hub",
        shortDesc: "Hub de ferramentas de investigação com coletores e playbooks de inteligência.",
        fullDesc: "Um conjunto de scripts modularizados para unificar o processo de coleta de inteligência de fontes abertas (OSINT). Inclui módulos para enumeração de subdomínios, verificação de vazamento de credenciais em bases públicas e raspagem de dados de redes sociais para análise de vetores de ataque social.\n\nIntegra APIs públicas como Shodan e HaveIBeenPwned.",
        techs: "Python | APIs REST | OSINT Framework",
        deployLink: "https://osint-tools-rho.vercel.app",
        githubLink: "https://github.com/Darkghostly/OSINT-Tools"
    },
    {
        id: 2,
        name: "Integrity_Checker.sh",
        shortDesc: "Script em bash para verificação contínua de integridade de arquivos críticos.",
        fullDesc: "Script de linha de comando para sistemas Linux que cria uma linha de base de hashes (SHA-256) de diretórios críticos (/etc, /bin). Ele roda em cron job para comparar o estado atual com a linha de base, alertando administradores sobre qualquer modificação não autorizada, um indicador chave de comprometimento do sistema.",
        techs: "Bash Scripting | Linux Hardening | Cryptography",
        deployLink: null,
        githubLink: "https://github.com/seu-usuario/integrity-checker"
    },
    {
        id: 3,
        name: "Secure_API_Gateway",
        shortDesc: "Implementação de gateway com validação JWT e rate limiting para proteção de microsserviços.",
        fullDesc: "Projeto focado em defesa de aplicação web. Atua como um proxy reverso que implementa autenticação via JSON Web Tokens (JWT), prevenindo acesso não autorizado. Inclui middleware de Rate Limiting utilizando Redis para mitigar ataques de Negação de Serviço (DoS) na camada de aplicação.",
        techs: "Node.js | Express | Redis | JWT Security",
        deployLink: "https://api-demo-link.com",
        githubLink: "https://github.com/seu-usuario/secure-gateway"
    }
];

// DADOS DOS CURSOS E CERTIFICAÇÕES
const trainingRecords = [
    {
        name: "Cybersecurity Essentials",
        issuer: "IBM",
        hours: "100h",
        year: "2025"
    },
    {
        name: "Boas Práticas de Cibersegurança",
        description: "IC-SEC-1783",
        issuer: "IBSEC",
        hours: "30h",
        year: "2026"
    },
    {
        name: "Certificado Profissional de Segurança cibernética do Google",
        issuer: "Google",
        hours: "116h",
        year: "2025"
    },
    {
        name: "Introduction to Cybersecurity",
        issuer: "IC2S",
        hours: "116h",
        year: "2025"
    },
    {
        name: "Introdução a Redes de Computadores",
        issuer: "FATEC",
        hours: "80h",
        year: "2024"
    },
    {
        name: "Linux e Bash Scripting para Segurança",
        issuer: "Plataforma X / Autodidata",
        hours: "40h",
        year: "2025"
    }
];

const academicRecords = [
    {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "FATEC São José dos Campos",
        period: "2024 - Presente",
        status: "3º Semestre"
    }
];

const techModules = [
    "DevSecOps", "OSINT", "Python", "Bash/Shell", "Linux Hardening", 
    "Análise de Vulnerabilidades", "Git/GitHub", "Redes TCP/IP"
];

function initSystem() {
    loadSavedTheme();
    checkSystemStatus();
    renderModules();
    renderProjects();
    renderEducation();
    renderCerts();
    setupOutsideClickModal();
    systemBootSequence();
    typeWriterEffect();
}

function checkSystemStatus() {
    const statusIndicator = document.getElementById('sys-status');
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 18) {
        statusIndicator.style.backgroundColor = "var(--accent)";
        statusIndicator.title = "System Online - Operações diurnas";
    } else {
        statusIndicator.style.backgroundColor = "#d29922";
        statusIndicator.title = "System Standby - Operações noturnas";
    }
}


function renderCerts() {
    const container = document.getElementById('certs-list');
    container.innerHTML = '';

    trainingRecords.forEach(record => {
        const item = document.createElement('div');
        item.className = 'cert-item';
        item.innerHTML = `
            <h3>> ${record.name}</h3>
            <p>Emissor_Node: ${record.issuer}</p>
            <span class="cert-meta">[ workload: ${record.hours} | timestamp: ${record.year} ]</span>
        `;
        container.appendChild(item);
    });
}

function renderEducation() {
    const container = document.getElementById('edu-list');
    container.innerHTML = '';

    academicRecords.forEach(record => {
        const item = document.createElement('div');
        item.className = 'cert-item'; 
        item.innerHTML = `
            <h3>> ${record.course}</h3>
            <p>Institution_Node: ${record.institution}</p>
            <span class="cert-meta">[ period: ${record.period} | status: ${record.status} ]</span>
        `;
        container.appendChild(item);
    });
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';


    cyberProjects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.onclick = () => openModal(project.id);
        
        card.innerHTML = `
            <h3>> ${project.name}</h3>
            <p>${project.shortDesc}</p>
            <span class="tech-stack">[ ${project.techs} ]</span>
        `;
        grid.appendChild(card);
    });
}

function renderModules() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    techModules.forEach(module => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = module;
        container.appendChild(span);
    });
}


function openModal(projectId) {

    const project = cyberProjects.find(p => p.id === projectId);
    if (!project) return;


    document.getElementById('modal-title').textContent = `> details: ${project.name}`;
    document.getElementById('modal-description').textContent = project.fullDesc;
    document.getElementById('modal-techs').textContent = `[ STACK: ${project.techs} ]`;


    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';

    if (project.deployLink) {
        linksContainer.innerHTML += `<a href="${project.deployLink}" target="_blank">[> Acessar Deploy ]</a>`;
    }
    if (project.githubLink) {
        linksContainer.innerHTML += `<a href="${project.githubLink}" target="_blank">[> Ver Código Fonte (GitHub) ]</a>`;
    }

    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}


function setupOutsideClickModal() {
    const modalOverlay = document.getElementById('project-modal');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}


function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('sys_theme', 'dark');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('sys_theme', 'light');
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('sys_theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}


function typeWriterEffect() {
    const text = "Especialista em Cibersegurança em formação";
    const element = document.getElementById('typing-text');
    let i = 0;
    element.innerHTML = '';

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, Math.random() * 50 + 30); 
        }
    }
    

    setTimeout(typing, 500);
}


function systemBootSequence() {

    const panels = document.querySelectorAll('.panel');
    

    panels.forEach((panel, index) => {
        setTimeout(() => {
            panel.classList.add('booted');
        }, index * 150); 
    });
}

document.addEventListener('DOMContentLoaded', initSystem);