function showAbout() {
    const introduction = document.body.classList.contains('brainrot-on') ? `
        <p>AI safety researcher. Research Fellow at Lossfunk. Currently in my <em>“does the model know it’s clueless?”</em> arc: metacognition, mechanistic interpretability, epistemic uncertainty, and factual correctness. Chat, we are inspecting the weights.</p>

        <p>I study how language models represent knowledge, uncertainty, and their own cognitive processes across architectures and modalities. Basically: the model is thinking about thinking, and I’m thinking about whether it’s actually doing that. Extremely normal behaviour.</p>

        <p>B.Tech in Computer Science &amp; Engineering from Rajasthan Technical University. Off the clock: reading, UFC, intelligence, space, and a deeply unserious number of fictional training arcs.</p>

        <p class="taste-note"><strong>The training arc:</strong> <em>One Piece</em>, <em>Black Clover</em>, and <em>Hajime no Ippo</em>. Luffy’s sense of direction, Asta’s refusal to quit, Ippo’s next round. Surely one more experiment is the power-up episode.</p>

        <p class="taste-note"><strong>The cinema brain:</strong> <em>The Good, the Bad and the Ugly</em>, <em>Batman</em>, <em>Whiplash</em>, <em>Fight Club</em>, <em>Interstellar</em>, and <em>Arrival</em>. Somewhere between a western standoff with a bug, “not quite my tempo” at a training run, and learning an alien language to understand a tensor. Absolute cinema.</p>
    ` : `
        <p>I'm an AI safety researcher working on metacognition, mechanistic interpretability, epistemic uncertainty, and factual correctness in language models. I currently work as a Research Fellow at Lossfunk.</p>

        <p>My research focuses on understanding how language models represent knowledge, uncertainty, and their own cognitive processes. I'm particularly interested in developing architecture-agnostic methods for studying these behaviors across different modalities.</p>

        <p>I hold a B.Tech in Computer Science &amp; Engineering from Rajasthan Technical University. Beyond research, I enjoy reading, anime, UFC, and thinking about intelligence and space.</p>
    `;
    const about = `
        <h3>About</h3>
        ${introduction}

        <p><strong>Open to:</strong> AI safety research collaborations and full-time research opportunities.</p>

        <div class="experience">
            <p class="experience-title">Experience</p>
            <ul class="experience-list">
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">Research Intern/Fellow (AI Safety) · Lossfunk</span>
                        <span class="experience-date">Mar 2026 – Present</span>
                    </div>
                    <p class="experience-location">Bengaluru, Karnataka</p>
                    <ul class="experience-points">
                        <li>Developing an architecture-agnostic framework for metacognition by studying invariants across frontier LLMs.</li>
                        <li>Investigating whether factual correctness is represented internally in 8B-scale language models.</li>
                    </ul>
                </li>
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">AI/ML Intern · Chirpn AI</span>
                        <span class="experience-date">Mar 2025 – Oct 2025</span>
                    </div>
                    <p class="experience-location">Pune / Remote</p>
                    <ul class="experience-points">
                        <li>Created coding, GitHub, and Jira agents from scratch using CrewAI.</li>
                        <li>Owned workflow development and reduced agent token usage by approximately 85%.</li>
                        <li>Implemented A2A and MCP protocols plus custom tools for GitHub, Jira, and file operations.</li>
                        <li>Built and deployed agentic workflows in production using LangGraph and Docker.</li>
                        <li>Fine-tuned Llama and open-source vision models for handwritten-text recognition, achieving 95% accuracy.</li>
                    </ul>
                </li>
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">Full Stack Developer · buildspace</span>
                        <span class="experience-date">Aug 2024 – Sep 2024</span>
                    </div>
                    <p class="experience-location">San Francisco Bay Area / Remote</p>
                    <ul class="experience-points">
                        <li>Selected for Nightz &amp; Weekends, a six-week program funded by Y Combinator and a16z.</li>
                        <li>Independently built and scaled an MVP to more than 1,000 visits.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="profile-section">
            <p class="experience-title">Achievements</p>
            <ul class="achievement-list">
                <li><strong>NIT Goa 0xGenIgnite Winner</strong> — Won a national-level Web3 hackathon at NIT Goa.</li>
                <li><strong>Logithon '25 IIT Bombay Finalist</strong> — Placed in the top five at the national logistics hackathon.</li>
                <li><strong>World Computer Hacker League '25</strong> — National qualifier.</li>
            </ul>
        </div>
    `;
    renderSection('about', about);
}

function showProjects() {
    const projects = `
        <h3>Projects</h3>

        <h4>AI / ML</h4>
        <ul>
            <li><a target="_blank" href="https://github.com/toheedakhtar/llm-scratch">llm-scratch</a> — A 127M-parameter GPT-2-style language model built from tokenization through pretraining, fine-tuning, and evaluation in PyTorch; trained on CPU.</li>

            <li><a target="_blank" href="https://huggingface.co/Tohidichi/gemma3-genz-270m">gemma3-genz-270m</a> — Fine-tuned Gemma 3 270M using PEFT/LoRA, TRL, and more than 120 synthetic Gen-Z college conversations.</li>

            <li><a target="_blank" href="https://github.com/toheedakhtar/semantic_chunking_yt">Semantic-chunker-yt</a> — Extracts and aligns meaningful text/audio pairs from YouTube videos for multimodal analysis.</li>

            <li><a target="_blank" href="https://huggingface.co/spaces/Tohidichi/moggedormogger">MoggedorMogger</a> — Computer vision model that analyzes facial aesthetics and provides ratings based on a social media trend, deployed on Hugging Face.</li>

            <li><a target="_blank" href="https://beat-sync-eight.vercel.app/">beatSync</a> — Full-stack ML recommender using KNN-based embeddings for personalized music suggestions.</li>
        </ul>

        <h4>Other</h4>
        <ul>
            <li><a target="_blank" href="https://github.com/toheedakhtar/RDR2-Journal">RDR2-Journal</a> — Detailed replica of Arthur Morgan's journal from Red Dead Redemption 2, recreating its aesthetic and storytelling.</li>

            <li><a target="_blank" href="https://pixbook.pythonanywhere.com/">Pixbook</a> — Ebook reader designed to present digital books with a focused reading experience.</li>

            <li><a target="_blank" href="https://github.com/toheedakhtar/cmdto">cmdto</a> — Command-line tool for quickly searching and discovering Linux terminal commands.</li>
        </ul>
    `;
    renderSection('projects', projects);
}

function showResearch() {
    const research = `
        <h3>Research</h3>

        <ul>
            <li><strong>Is Factual Correctness Represented in LLMs? A Cross-Dataset Probing Study</strong> — Examining whether internal model representations encode factual correctness consistently across datasets. <span class="research-status">Draft / in preparation</span></li>
            <li><a target="_blank" href="https://www.lesswrong.com/posts/cgCeqi8cDn9RnDdQA/small-language-models-hallucinate-knowing-something-s-off">Small language models hallucinate knowing something's off</a> — Research on epistemic uncertainty detection in LLMs and how small models suppress detected uncertainty. Published on LessWrong (Jan 2026). <b>[LessWrong]</b></li>
            <li><a target="_blank" href="https://github.com/Open-Superintelligence-Lab/5-dollar-llm/pull/56">Polar Express contribution to the $5 LLM project</a> — Replaced the Newton–Schulz iteration in the MuON optimizer; the contribution is credited on the project's <a target="_blank" href="https://github.com/Open-Superintelligence-Lab/5-dollar-llm/blob/main/docs/LEADERBOARD.md">1B-token marathon leaderboard</a>. <b>[Open source]</b></li>
        </ul>
    `;
    renderSection('research', research);
}

function showLinks() {
    const links = `
        <h3>Contact</h3>
        <ul>
            <li><a href="mailto:toheedak333@gmail.com">Email</a></li>
            <li><a href="https://github.com/toheedakhtar" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/toheedakhtar01" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/toheedakhtar01" target="_blank">Twitter/X</a></li>
        </ul>
    `;
    renderSection('contact', links);
}

function renderSection(section, html) {
    const content = document.getElementById('content');
    content.dataset.section = section;
    content.innerHTML = html;
    content.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.rel = 'noopener noreferrer';
    });
    content.classList.remove('content-enter');
    void content.offsetWidth;
    content.classList.add('content-enter');
    const sections = ['about', 'projects', 'research', 'contact'];
    document.getElementById('section-index').textContent = `0${sections.indexOf(section) + 1} / 04`;
    document.querySelectorAll('.nav-item[data-section]').forEach(link => {
        if (link.dataset.section === section) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
    document.title = `${section.charAt(0).toUpperCase() + section.slice(1)} — Toheed Akhtar`;
}

window.addEventListener('DOMContentLoaded', () => {
    const views = { about: showAbout, projects: showProjects, research: showResearch, contact: showLinks };
    const currentView = () => {
        const section = window.location.hash.slice(1);
        if (Object.hasOwn(views, section)) views[section]();
        else showAbout();
    };

    document.querySelectorAll('.nav-item[data-section]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const section = link.dataset.section;
            if (window.location.hash !== `#${section}`) {
                window.history.pushState(null, '', `#${section}`);
            }
            views[section]();
            const main = document.getElementById('main');
            main.focus({ preventScroll: true });
            if (window.matchMedia('(max-width: 900px)').matches) {
                main.scrollIntoView({ block: 'start' });
            }
        });
    });
    window.addEventListener('popstate', currentView);
    window.addEventListener('hashchange', () => {
        if (Object.hasOwn(views, window.location.hash.slice(1))) currentView();
    });

    const themeToggle = document.getElementById('theme-toggle');
    const setTheme = (theme, persist = false) => {
        const isLight = theme === 'light';
        document.documentElement.dataset.theme = theme;
        document.getElementById('theme-state').textContent = theme;
        document.getElementById('theme-icon').textContent = isLight ? '☀' : '☾';
        themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
        document.getElementById('theme-color').setAttribute('content', isLight ? '#f3f2e9' : '#101715');
        if (persist) {
            try { localStorage.setItem('theme', theme); } catch { /* Storage is optional. */ }
        }
    };
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    themeToggle.addEventListener('click', () => {
        setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light', true);
    });

    const brainrot = document.getElementById('brainrot-toggle');
    const setBrainrot = enabled => {
        document.body.classList.toggle('brainrot-on', enabled);
        brainrot.setAttribute('aria-pressed', String(enabled));
        document.getElementById('brainrot-state').textContent = enabled ? 'on' : 'off';
        if (document.getElementById('content').dataset.section === 'about') showAbout();
    };
    try { setBrainrot(localStorage.getItem('brainrot') !== 'off'); } catch { setBrainrot(true); }
    brainrot.addEventListener('click', () => {
        const enabled = brainrot.getAttribute('aria-pressed') !== 'true';
        setBrainrot(enabled);
        try { localStorage.setItem('brainrot', enabled ? 'on' : 'off'); } catch { /* Storage is optional. */ }
    });
    document.getElementById('back-to-top').addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0 });
        document.querySelector('.monogram').focus({ preventScroll: true });
    });
    document.querySelectorAll('a[target="_blank"]').forEach(link => { link.rel = 'noopener noreferrer'; });
    currentView();
});
