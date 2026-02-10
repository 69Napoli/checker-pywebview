
const NIRSOFT_TOOLS = [
  { id:"n1", name:"WinPrefetchView", icon:"fileSearch", category:"NirSoft", url:"https://www.nirsoft.net/utils/winprefetchview-x64.zip", filename:"NirSoft-WinPrefetchView.zip" },
  { id:"n2", name:"WinDefThreatsView", icon:"shield", category:"NirSoft", url:"https://www.nirsoft.net/utils/windefthreatsview-x64.zip", filename:"WinDefenderThreatsViewer.zip" },
  { id:"n3", name:"USBDeview", icon:"usb", category:"NirSoft", url:"https://www.nirsoft.net/utils/usbdeview.zip", filename:"USBDeview.zip" },
  { id:"n4", name:"Everything", icon:"search", category:"NirSoft", url:"https://www.voidtools.com/Everything-1.4.1.1026.x86-Setup.exe", filename:"Everything.exe" },
  { id:"n5", name:"LastActivityView", icon:"activity", category:"NirSoft", url:"https://www.nirsoft.net/utils/lastactivityview.zip", filename:"LastActivityView.zip" },
  { id:"n6", name:"AlternateStreamView", icon:"scanLine", category:"NirSoft", url:"https://www.nirsoft.net/utils/alternatestreamview-x64.zip", filename:"AlternateStreamView.zip" },
  { id:"n7", name:"TaskSchedulerView", icon:"monitor", category:"NirSoft", url:"https://www.nirsoft.net/utils/taskschedulerview-x64.zip", filename:"TaskSchedulerView.zip" },
  { id:"n9", name:"BrowsingHistoryView", icon:"globe", category:"NirSoft", url:"https://www.nirsoft.net/utils/browsinghistoryview-x64.zip", filename:"BrowsingHistoryView.zip" },
  { id:"n10", name:"WinDefLogView", icon:"shieldAlert", category:"NirSoft", url:"https://www.nirsoft.net/utils/windeflogview.zip", filename:"WinDefLogView.zip" },
  { id:"n8", name:"All Tools Above", icon:"download", category:"NirSoft", downloads:[
    {url:"https://www.nirsoft.net/utils/winprefetchview-x64.zip",filename:"NirSoft-WinPrefetchView.zip"},
    {url:"https://www.nirsoft.net/utils/windefthreatsview-x64.zip",filename:"NirSoft-WinDefThreatsView.zip"},
    {url:"https://www.nirsoft.net/utils/usbdeview.zip",filename:"NirSoft-USBDeview.zip"},
    {url:"https://www.nirsoft.net/utils/lastactivityview.zip",filename:"NirSoft-LastActivityView.zip"},
    {url:"https://www.voidtools.com/Everything-1.4.1.1026.x86-Setup.exe",filename:"Everything-Setup.exe"},
    {url:"https://www.nirsoft.net/utils/taskschedulerview-x64.zip",filename:"TaskSchedulerView.zip"},
    {url:"https://www.nirsoft.net/utils/alternatestreamview-x64.zip",filename:"AlternateStreamView.zip"},
    {url:"https://www.nirsoft.net/utils/browsinghistoryview-x64.zip",filename:"BrowsingHistoryView.zip"},
    {url:"https://www.nirsoft.net/utils/windeflogview.zip",filename:"WinDefLogView.zip"},
  ]},
];

const DETECT_AC_TOOLS = [
  { id:"d1", name:"Bam Parser", icon:"fileSearch", category:"Detect AC", url:"https://github.com/spokwn/BAM-parser/releases/download/v1.2.6/BAMParser.exe", filename:"BamParser.exe" },
  { id:"d2", name:"Prefetch Parser", icon:"database", category:"Detect AC", url:"https://github.com/spokwn/prefetch-parser/releases/download/v1.5.3/PrefetchParser.exe", filename:"PrefetchParser.exe" },
  { id:"d3", name:"PcaSvc Executed", icon:"activity", category:"Detect AC", url:"https://github.com/spokwn/pcasvc-executed/releases/download/v0.8.5/PcaSvcExecuted.exe", filename:"PcaSvcExecuted.exe" },
  { id:"d4", name:"Process Parser", icon:"cpu", category:"Detect AC", url:"https://github.com/spokwn/process-parser/releases/download/v0.5.3/ProcessParser.exe", filename:"ProcessParser.exe" },
  { id:"d5", name:"All Tools Above", icon:"download", category:"Detect AC", downloads:[
    {url:"https://github.com/spokwn/BAM-parser/releases/download/v1.2.6/BAMParser.exe",filename:"BAMParser.exe"},
    {url:"https://github.com/spokwn/prefetch-parser/releases/download/v1.5.3/PrefetchParser.exe",filename:"PrefetchParser.exe"},
    {url:"https://github.com/spokwn/pcasvc-executed/releases/download/v0.8.5/PcaSvcExecuted.exe",filename:"PcaSvcExecuted.exe"},
    {url:"https://github.com/spokwn/process-parser/releases/download/v0.5.3/ProcessParser.exe",filename:"ProcessParser.exe"},
  ]},
];

const ERIC_TOOLS = [
  { id:"e1", name:"AmCacheParser", icon:"database", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/AmcacheParser.zip", filename:"AmCacheParser.zip" },
  { id:"e2", name:"Timeline Explorer", icon:"activity", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/TimelineExplorer.zip", filename:"TimeLineExplorer.zip" },
  { id:"e3", name:"Bstrings", icon:"search", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/bstrings.zip", filename:"Bstrings.zip" },
  { id:"e4", name:"SrumECmd", icon:"terminal2", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/SrumECmd.zip", filename:"SrumECmd.zip" },
  { id:"e5", name:"AppCompatCacheParser", icon:"cpu", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/AppCompatCacheParser.zip", filename:"AppCompatCacheParser.zip" },
  { id:"e6", name:"Registry Explorer", icon:"lock", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/RegistryExplorer.zip", filename:"RegistryExplorer.zip" },
  { id:"e7", name:"MfteCmd", icon:"fileSearch", category:"Eric Zimmerman", url:"https://download.ericzimmermanstools.com/net9/MFTECmd.zip", filename:"MFTECmd.zip" },
  { id:"e8", name:"All Tools Above", icon:"download", category:"Eric Zimmerman", downloads:[
    {url:"https://download.ericzimmermanstools.com/net9/AmcacheParser.zip",filename:"AmCacheParser.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/TimelineExplorer.zip",filename:"TimelineExplorer.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/bstrings.zip",filename:"Bstrings.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/SrumECmd.zip",filename:"SrumECmd.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/AppCompatCacheParser.zip",filename:"AppCompatCacheParser.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/RegistryExplorer.zip",filename:"RegistryExplorer.zip"},
    {url:"https://download.ericzimmermanstools.com/net9/MFTECmd.zip",filename:"MFTECmd.zip"},
  ]},
];

const ECHO_TOOLS = [
  { id:"ec1", name:"Echo String Scanner", icon:"search", category:"Echo Tools", url:"https://dl.echo.ac/tool/strings", filename:"EchoStringScanner.exe" },
  { id:"ec2", name:"Echo USB Deview Viewer", icon:"usb", category:"Echo Tools", url:"https://dl.echo.ac/tool/usb", filename:"EchoUSBDeview.exe" },
  { id:"ec3", name:"Echo Easy Journal Viewer", icon:"activity", category:"Echo Tools", url:"https://dl.echo.ac/tool/journal", filename:"EchoJournalViewer.exe" },
  { id:"ec4", name:"Echo BAM Log Viewer", icon:"fileSearch", category:"Echo Tools", url:"https://dl.echo.ac/tool/bam", filename:"EchoBAMLogViewer.exe" },
  { id:"ec5", name:"Echo UserAssist Viewer", icon:"fingerprint", category:"Echo Tools", url:"https://www.mediafire.com/file/leeim35qtn5hkrd/echo-userassist.exe/file", filename:"EchoUserAssistViewer.exe" },
  { id:"ec6", name:"All Tools Above", icon:"download", category:"Echo Tools", downloads:[
    {url:"https://dl.echo.ac/tool/strings",filename:"EchoStringScanner.exe"},
    {url:"https://dl.echo.ac/tool/usb",filename:"EchoUSBDeview.exe"},
    {url:"https://dl.echo.ac/tool/journal",filename:"EchoJournalViewer.exe"},
    {url:"https://dl.echo.ac/tool/bam",filename:"EchoBAMLogViewer.exe"},
    {url:"https://www.mediafire.com/file/leeim35qtn5hkrd/echo-userassist.exe/file",filename:"EchoUserAssistViewer.exe"},
  ]},
];

const PWSH_TOOLS = [
  { id:"p1", name:"Services", icon:"terminal2", category:"PowerShell", action:"powershell-services" },
  { id:"p2", name:"Red Lotus BAM", icon:"code", category:"PowerShell", action:"powershell-redLotusBam" },
  { id:"p3", name:"Path Signature", icon:"fingerprint", category:"PowerShell", action:"powershell-pathSignature" },
  { id:"p4", name:"Hard Disk Volume", icon:"hardDrive", category:"PowerShell", action:"powershell-hardDiskVolume" },
];

const MAIN_TOOLS = [
  { id:"1", name:"NirSoft Tools", icon:"shield", category:"Toolkit", submenu: NIRSOFT_TOOLS },
  { id:"2", name:"Detect Ac Tools", icon:"cpu", category:"Toolkit", submenu: DETECT_AC_TOOLS },
  { id:"3", name:"Eric Zimmerman's Tools", icon:"microscope", category:"Toolkit", submenu: ERIC_TOOLS },
 /*  { id:"14", name:"Echo Tools", icon:"radio", category:"Toolkit", submenu: ECHO_TOOLS }, */
  { id:"15", name:"YARA-X Scanner", icon:"scanLine", category:"Web Tool", action:"open-yara" },
  { id:"4", name:"USB Check", icon:"usb", category:"Registry", action:"usb-check" },
  { id:"5", name:"Journal Trace", icon:"activity", category:"Forensics", url:"https://github.com/spokwn/JournalTrace/releases/download/1.2/JournalTrace.exe", filename:"JournalTrace.exe" },
  { id:"6", name:"Disk Drill", icon:"hardDrive", category:"Utility", url:"https://win.cleverfiles.com/disk-drill-win.exe", filename:"DiskDrill.exe" },
  { id:"7", name:"Magnet Process Capture", icon:"magnet", category:"Forensics", url:"https://d1kpmuwb7gvu1i.cloudfront.net/Imgr/4.7.3.81%20Release/Exterro_FTK_Imager_(x64)-4.7.3.81.exe", filename:"MagnetProcessCapture.exe" },
  { id:"8", name:"PowerShell Scripts", icon:"terminal2", category:"Scripts", submenu: PWSH_TOOLS },
  { id:"9", name:"Hayabusa", icon:"zap", category:"Forensics", url:"https://github.com/Yamato-Security/hayabusa/releases/download/v3.1.1/hayabusa-3.1.1-win-x64.zip", filename:"Hayabusa.zip" },
  { id:"10", name:"FTK Imager", icon:"fingerprint", category:"Forensics", url:"https://d1kpmuwb7gvu1i.cloudfront.net/Imgr/4.7.3.81%20Release/Exterro_FTK_Imager_(x64)-4.7.3.81.exe", filename:"Ftk-Imager.exe" },
  { id:"11", name:"OsForensics", icon:"scanLine", category:"Forensics", url:"https://osforensics.com/downloads/OSForensics.exe", filename:"OSForensics.exe" },
  { id:"12", name:"System Informer", icon:"monitor", category:"Utility", url:"https://github.com/winsiderss/si-builds/releases/download/4.0.26036.1143/systeminformer-build-canary-setup.exe", filename:"SystemInformer(Setup).exe" },
  { id:"16", name:"EZ PC Checker", icon:"shield", category:"Forensics", url:"https://github.com/69Napoli/checking-local/releases/download/Release/EZ_PC_Checker.exe", filename:"EZ_PC_Checker.exe" },
];


let currentMenu = MAIN_TOOLS;
let menuHistory = [];
let logs = ["[SYS] Checker_AC INITIALIZED","[SYS] Developed by @napoli","[SYS] Awaiting command input..."];
let isExecuting = false;
let systemInfo = { username:"Admin", arch:"x64", hostname:"Local" };
let checkerFolder = "";

const PS_SCRIPTS = {
  services: "$findstrPath = 'C:\\Windows\\System32\\findstr.exe'\nget-service | & $findstrPath -i 'pcasvc'\nget-service | & $findstrPath -i 'DPS'\nget-service | & $findstrPath -i 'Diagtrack'\nget-service | & $findstrPath -i 'sysmain'\nget-service | & $findstrPath -i 'eventlog'\nget-service | & $findstrPath -i 'sgrmbroker'\nget-service | & $findstrPath -i 'cdpusersvc'",
  redLotusBam: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/PureIntent/ScreenShare/main/RedLotusBam.ps1)",
  pathSignature: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/bacanoicua/Screenshare/main/RedLotusSignatures.ps1)",
  hardDiskVolume: "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/bacanoicua/Screenshare/main/RedLotusSignatures.ps1)",
};


async function waitForApi() {
  while (!window.pywebview || !window.pywebview.api) {
    await new Promise(r => setTimeout(r, 50));
  }
}


async function init() {
  await waitForApi();
  try {
    const info = JSON.parse(await pywebview.api.get_system_info());
    systemInfo = { username: info.username, arch: info.arch, hostname: info.hostname };
    checkerFolder = info.checker_folder;
    addLog(`[SYS] Connected: ${systemInfo.username}@${systemInfo.hostname}`);
    addLog(`[SYS] Output folder: ${checkerFolder}`);
  } catch(e) { addLog(`[ERR] Init error: ${e}`); }
  
  render();
  renderAllLogs();
  updateSidebar();
  startClock();
}

function addLog(msg) { logs.push(msg); renderLastLog(); }

function getLogClass(log) {
  if (log.includes("[OK]")) return "ok";
  if (log.includes("[ERR]")) return "err";
  if (log.includes("[DL]")) return "dl";
  if (log.includes("[PS]")) return "ps";
  return "sys";
}

async function downloadFile(url, filename) {
  addLog(`[DL] Downloading ${filename}...`);
  try {
    const result = JSON.parse(await pywebview.api.download_file(url, filename));
    if (result.ok) { addLog(`[OK] ${filename} saved to ${result.path}`); return true; }
    else { addLog(`[ERR] Failed: ${result.error}`); return false; }
  } catch(e) { addLog(`[ERR] Download error: ${e}`); return false; }
}

async function runUSBCheck() {
  isExecuting = true; updateSidebar(); render();
  addLog("[SYS] Starting Registry Scan (USB Check)...");
  const keys = [
    'HKLM\\SOFTWARE\\Microsoft\\Windows Search\\VolumeInfoCache\\D:',
    'HKLM\\SYSTEM\\MountedDevices',
    'HKLM\\SYSTEM\\CurrentControlSet\\Control\\usbflags',
    'HKLM\\SOFTWARE\\Microsoft\\Windows Portable Devices\\Devices',
  ];
  for (const key of keys) {
    try {
      const result = JSON.parse(await pywebview.api.usb_check(key));
      addLog(result.exists ? `[OK] ${key} -> EXISTS` : `[ERR] ${key} -> DELETED/NOT FOUND`);
    } catch(e) { addLog(`[ERR] ${key} -> ERROR: ${e}`); }
  }
  addLog("[SYS] USB Registry scan complete.");
  isExecuting = false; updateSidebar(); render();
}

async function runPowerShell(scriptType) {
  isExecuting = true; updateSidebar(); render();
  addLog(`[SYS] Executing PowerShell: ${scriptType}...`);
  const script = PS_SCRIPTS[scriptType];
  if (!script) { addLog("[ERR] Unknown script type"); isExecuting = false; updateSidebar(); render(); return; }
  try {
    const result = JSON.parse(await pywebview.api.run_powershell(script));
    if (result.stdout) result.stdout.split('\n').forEach(l => { if(l.trim()) addLog(`[PS] ${l.trim()}`); });
    if (result.stderr) result.stderr.split('\n').forEach(l => { if(l.trim()) addLog(`[ERR] ${l.trim()}`); });
    addLog(result.ok ? "[OK] PowerShell completed." : "[ERR] PowerShell finished with errors.");
  } catch(e) { addLog(`[ERR] PowerShell error: ${e}`); }
  isExecuting = false; updateSidebar(); render();
}

async function handleToolClick(toolId) {
  const tool = currentMenu.find(t => t.id === toolId);
  if (!tool || isExecuting) return;
  
  if (tool.submenu) { menuHistory.push(currentMenu); currentMenu = tool.submenu; addLog(`[SYS] Entering submenu: ${tool.name}`); render(); return; }
  if (tool.action === "usb-check") { await runUSBCheck(); return; }
  if (tool.action && tool.action.startsWith("powershell-")) { await runPowerShell(tool.action.replace("powershell-","")); return; }
  
  if (tool.action === "open-yara") { 
    addLog("[SYS] Opening YARA-X Scanner in browser...");
    window.pywebview.api.open_url("https://yara-x-railway-production.up.railway.app/");
    return; 
  }

  
  if (tool.downloads) {
    isExecuting = true; updateSidebar(); render();
    addLog(`[SYS] Batch download: ${tool.downloads.length} files...`);
    for (const dl of tool.downloads) await downloadFile(dl.url, dl.filename);
    addLog("[OK] Batch download complete!");
    isExecuting = false; updateSidebar(); render(); return;
  }
  
  if (tool.url && tool.filename) {
    isExecuting = true; updateSidebar(); render();
    await downloadFile(tool.url, tool.filename);
    isExecuting = false; updateSidebar(); render();
  }
}

function goBack() { if (menuHistory.length > 0) { currentMenu = menuHistory.pop(); render(); } }

async function openCheckerFolder() {
  try { await pywebview.api.open_folder(); }
  catch(e) { addLog(`[ERR] Could not open folder: ${e}`); }
}

function render() {
  const grid = document.getElementById('tool-grid');
  const backBtn = document.getElementById('btn-back');
  const title = document.getElementById('content-title-text');
  const count = document.getElementById('item-count');
  
  backBtn.style.display = menuHistory.length > 0 ? 'flex' : 'none';
  title.textContent = menuHistory.length > 0 ? 'Submenu Selection' : 'Main Toolkit';
  count.textContent = `Items: ${currentMenu.length}`;
  
  grid.innerHTML = currentMenu.map(tool => {
    const iconType = tool.submenu ? 'submenu' : tool.downloads ? 'download' : tool.action ? 'action' : 'normal';
    const arrow = tool.submenu ? ICONS.chevronRight : `<span style="opacity:0.25">${ICONS.play}</span>`;
    return `
      <button class="tool-card" ${isExecuting?'disabled':''} onclick="handleToolClick('${tool.id}')">
        <div class="tool-icon-wrap ${iconType}">${ICONS[tool.icon]||ICONS.fileSearch}</div>
        <div class="tool-info">
          <div class="tool-name">${tool.name}</div>
          <div class="tool-category">${tool.category}</div>
        </div>
        <div class="tool-arrow">${arrow}</div>
      </button>`;
  }).join('');
}

function renderLastLog() {
  const body = document.getElementById('terminal-body');
  if (!body) return;
  const last = logs[logs.length-1];
  const idx = logs.length-1;
  const div = document.createElement('div');
  div.className = `log-line ${getLogClass(last)}`;
  div.innerHTML = `<span class="log-idx">[${String(idx).padStart(3,'0')}]</span><span class="log-msg">${escapeHtml(last)}</span>`;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function renderAllLogs() {
  const body = document.getElementById('terminal-body');
  if (!body) return;
  body.innerHTML = logs.map((log,i) => 
    `<div class="log-line ${getLogClass(log)}"><span class="log-idx">[${String(i).padStart(3,'0')}]</span><span class="log-msg">${escapeHtml(log)}</span></div>`
  ).join('');
  body.scrollTop = body.scrollHeight;
}

function updateSidebar() {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const userEl = document.getElementById('stat-user');
  const hostEl = document.getElementById('stat-host');
  const footerStatus = document.getElementById('footer-status');
  if (dot) dot.className = isExecuting ? 'status-dot active' : 'status-dot';
  if (text) text.textContent = isExecuting ? 'Running' : 'Idle';
  if (userEl) userEl.textContent = systemInfo.username;
  if (hostEl) hostEl.textContent = systemInfo.hostname;
  if (footerStatus) footerStatus.textContent = isExecuting ? 'Processing...' : 'Ready';
}

function startClock() {
  const el = document.getElementById('footer-time');
  const update = () => { if(el) el.textContent = new Date().toLocaleTimeString(); };
  update();
  setInterval(update, 1000);
}

function escapeHtml(str) { return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }


window.addEventListener('load', init);
