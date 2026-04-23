const BASE_URL = 'https://res.gosmart.mn/static/ac/';
pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

/* ── Clone desktop sidebar into mobile drawer ── */
document.getElementById('mobileSidebarBody').innerHTML =
    document.getElementById('sidebar').innerHTML;

/* ── SEARCH DATA ── */
const allDocs = [
    { label:'Монгол улсын төрийн шагналын тухай дүрэм 302', file:'documents/монгол улсын төрийн шагналын тухай дүрэм 302.pdf'},
    { label:'МУ ерөнхийлөгчийн нэрэмжит шагнал олгох журам', file:'documents/МУ ерөнхийлөгчийн нэрэмжит шагнал олгох журам.pdf'},
    { label:'Алсын хараа-2050 Монгол Улсын урт хугацааны хөгжлийн бодлого батлах тухай', file:'documents/Алсын хараа-2050 Монгол Улсын урт хугацааны хөгжлийн бодлого батлах тухай.pdf'},
    { label:'Монгол Улсыг 2021-2025 онд хөгжүүлэх таван жилийн үндсэн чиглэл батлах тухай', file:'documents/Монгол Улсыг 2021-2025 онд хөгжүүлэх таван жилийн үндсэн чиглэл батлах тухай.pdf'},
    { label:'Шинжлэх ухааны байгууллагуудыг бэхжүүлэх зарим арга хэмжээний тухай', file:'documents/УИХ-ын 7 тогтоол.PDF'},
    { label:'Шинжлэх ухаан, технологийн салбарын үйл ажиллагааг дэмжих зарим арга хэмжээний тухай', file:'documents/УИХ-ын 17-тогтоол.PDF'},
    { label:'Инновацийн тухай хуулийг хэрэгжүүлэх зарим арга хэмжээний тухай', file:'documents/УИХ-ийн 18-р тогтоол.PDF'},
    { label:'Академийн гишүүдийн тооны дээд хязгаарыг шинэчлэн тогтоох тухай', file:'documents/Академийн гишүүдийн тооны дээд хязгаарыг шинэчлэн тогтоох тухай.pdf'},
    { label:'Шинжлэх ухаан, технологийн тухай', file:'documents/Шинжлэх ухаан, технологийн тухай.pdf'},
    { label:'ШУА-ийн эрх зүйн байдлын тухай хууль', file:'documents/ШУА-ийн эрх зүйн байдлын тухай хууль.pdf'},
    { label:'Инновацын тухай хууль', file:'documents/Инновацын тухай хууль.pdf'},
    { label:'Патентын тухай хууль', file:'documents/Патентын тухай хууль.pdf'},
    { label:'Монгол Улсын Шинжлэх ухааны академийн дүрэм', file:'documents/Монгол Улсын Шинжлэх ухааны академийн дүрэм.pdf'},
    { label:'Журам батлах тухай', file:'documents/Журам батлах тухай.pdf'},
    { label:'Нэрэмжит шагнал олгох журам', file:'documents/Нэрэмжит шагнал олгох журам.pdf'},
    { label:'Төрийн захиргааны болон үйлчилгээний албан хаагчийн ёс зүйн дүрэм', file:'documents/Ёс зүйн дүрэм.pdf'},
    { label:'Технологи дамжуулах тухай хууль', file:'documents/Технологи дамжуулах тухай.pdf'},
    { label:'Гарааны компани болон программ хангамжийн үйлдвэрлэл', file:'https://legalinfo.mn/mn/detail?lawId=16758495490881'},
    { label:'Инновацийн үйл ажиллагааны тэргүүлэх чиглэл', file:'documents/Инновацын үйл ажиллагааны тэргүүлэх чиглэл (2020-2025 он).pdf'},
    { label:'Инновацийн төсөл бүртгэх журам', file:'documents/Инновацын төсөл бүртгэх журам.pdf'},
    { label:'Оюуны өмчийн тухай хууль', file:'documents/Оюуны өмчийн тухай.pdf'},
    { label:'Журам батлах, шагналын хэмжээ тогтоох тухай', file:'documents/Үндэсний инновацын шагнал олгох журам.pdf'},
    { label:'Төсвийн хуваарь батлах журам', file:'documents/Төсвийн хуваарь батлах журам.pdf'},
    { label:'ШУА-ийн шагналууд ба тэдгээрийг олгох журам', file:'documents/Шинжлэх ухааны академийн шагналууд ба тэдгээрийг олгох журам.pdf'},
    { label:'ШУА-ийн харъяа хүрээлэнгийн үлгэрчилсэн дүрэм', file:'documents/хүрээлэнгийн үлгэрчилсэн дүрэм.pdf'},
    { label:'ШУА-ийн захирлыг сонгон шалгаруулж томилох журам', file:'documents/ШУА-ийн захирал сонгон шалгаруулах журам.pdf'},
    { label:'Эрдэм шинжилгээний байгууллага, ажилтанд гранд олгох журам', file:'documents/грант олгох журам.pdf'},
    { label:'ШУА-ийн хурлын бэлтгэл журам', file:'documents/ШУА-ийн хурлын бэлтгэл журам.pdf'},
    { label:'Төрийн албаны шалгалт өгөх болзол болон шатлан дэвшүүлэх, сонгон шалгаруулах журам', file:'documents/Төрийн албаны шалгалт өгөх болзол болон шатлан дэвшүүлэх, сонгон шалгаруулах журам.pdf'},
    { label:'ШУА-ийн Ерөнхийлөгчийн сонгууль явуулах журам', file:'documents/Монгол Улсын Шинжлэх Ухааны Академийн Ерөнхийлөгчийн сонгууль явуулах журам.pdf'},
    { label:'ШУА-ийн гишүүнийг сонгох журам', file:'documents/монгол улсын шинжлэх ухааны академийн гишүүнийг сонгох журам.pdf'},
    { label:'ШУА-ийн бага чуулганы дүрэм', file:'documents/Монгол Улсын Шинжлэх Ухааны бага чуулганы дүрэм.pdf'},
    { label:'ШУА-ийн дэд ерөнхийлөгч, ЭНБД сонгох журам', file:'documents/ШУА-ийн дэд ерөнхийлөгч, ЭНБД сонгох журам.pdf'},
    { label:'Гадаадтай хамтарсан төсөл хэрэгжүүлэх, санхүүжүүлэх, хяналт тавих журам', file:'documents/Гадаадтай хамтарсан төсөл хэрэгжүүлэх, санхүүжүүлэх, хяналт тавих журам.pdf'},
    { label:'ШУА-ийн эрдэмтэн солилцоо журам', file:'documents/ШУА-ийн эрдэмтэн солилцоо журам.pdf'},
    { label:'ШУА-ийн хандив тусламж журам', file:'documents/ШУА-ийн хандив тусламж журам.pdf'},
    { label:'ШУА-ийн барааны тэмдэг ашиглах журам', file:'documents/Барааны тэмдэг ашиглах журам.PDF'},
    { label:'ШУА-ийн технологи дамжуулах журам', file:'documents/Технологи дамжуулах журам.pdf'},
    { label:'Олон улсын нэр хүндтэй эрдэм шинжилгээний сэтгүүлд бүтээл нийтлүүлсэн судлаачдад мөнгөн урамшуулал олгох журам', file:'documents/Олон улсын нэр хүндтэй мэргэжлийн  ЭШС урамшуулал олгох журам.pdf'},
    { label:'ШУА-ийн тэргүүлэгчдийн газрын дотоод журам', file:'documents/ШУА-ийн Хөдөлмөрийн дотоод журам.pdf'},
    { label:'ШУА-ийн технологийн инкубаторын дүрэм', file:'documents/Шинжлэх ухааны академийн технологийн инкубаторын дүрэм.pdf'},
    { label:'Дотоодын эрдэм шинжилгээний сэтгүүлийн жагсаалт батлах тухай', file:'documents/Дотоодын эрдэм шинжилгээний сэтгүүлийн жагсаалт  А34 дугаар тушаал.pdf'},
    { label:'ШУА-ийн докторын Зөвлөлийн бүрэлдэхүүн 2026', file:'https://mas.ac.mn/public/uploads/c1146401-0ade-41e1-abd0-df12a3cd3da5/%D0%A8%D0%A3%D0%90-%D0%B8%D0%B9%D0%BD%20%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80%D1%8B%D0%BD%20%D0%97%D3%A9%D0%B2%D0%BB%D3%A9%D0%BB%D0%B8%D0%B9%D0%BD%20%D0%B1%D2%AF%D1%80%D1%8D%D0%BB%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%202026.pdf'},
];

/* ── SEARCH ── */
const searchInput = document.getElementById('searchInput');
const acList      = document.getElementById('autocompleteList');

/* Mobile search elements (appear on small screens) */
const mobileSearchInput = document.getElementById('mobileSearchInput');
const mobileAcList      = document.getElementById('mobileAutocompleteList');

searchInput.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) { acList.classList.remove('show'); acList.innerHTML=''; return; }
    const hits = allDocs.filter(d => d.label.toLowerCase().includes(q)).slice(0,10);
    if (!hits.length) { acList.classList.remove('show'); acList.innerHTML=''; return; }
    acList.innerHTML = hits.map(d =>
        `<div class="ac-item" onclick="showLaw('${d.file.replace(/'/g,"\\'")}');clearSearch();">${d.label}</div>`
    ).join('');
    acList.classList.add('show');
});
function clearSearch(){
    searchInput.value='';
    acList.classList.remove('show');
    acList.innerHTML='';
}
document.addEventListener('click', e => { if(!e.target.closest('.search-wrap')) clearSearch(); });

/* Close mobile autocomplete when tapping outside mobile search area */
document.addEventListener('click', e => {
    if (!e.target.closest('#mobileSearchBar')) {
        if (mobileAcList) { mobileAcList.classList.remove('show'); mobileAcList.innerHTML = ''; }
    }
});

/* Mobile autocomplete behavior (same source as desktop) */
if (mobileSearchInput && mobileAcList) {
    mobileSearchInput.addEventListener('input', function () {
        const q = this.value.trim().toLowerCase();
        if (!q) { mobileAcList.classList.remove('show'); mobileAcList.innerHTML=''; return; }
        const hits = allDocs.filter(d => d.label.toLowerCase().includes(q)).slice(0,10);
        if (!hits.length) { mobileAcList.classList.remove('show'); mobileAcList.innerHTML=''; return; }
        mobileAcList.innerHTML = hits.map(d =>
            `<div class="ac-item" onclick="showLaw('${d.file.replace(/'/g,"\\'")}');document.getElementById('mobileSearchInput').value='';document.getElementById('mobileAutocompleteList').classList.remove('show');document.getElementById('mobileAutocompleteList').innerHTML='';">${d.label}</div>`
        ).join('');
        mobileAcList.classList.add('show');
    });
}

/* ── PDF VIEWER ── */
let pdfDoc=null, scale=1.5, currentUrl='';

function showLaw(file) {
    /* External URL → open in new tab (avoid CORS/range errors with pdf.js) */
    if (file && file.indexOf('://') !== -1) {
        window.open(file, '_blank');
        return;
    }

    /* Encode each path segment so spaces/Cyrillic → %20 etc,
       but don't double-encode if already encoded */
    function toEncodedUrl(f) {
        if (f && f.indexOf('://') !== -1) return f;
        return BASE_URL + f.split('/').map(seg => encodeURIComponent(decodeURIComponent(seg))).join('/');
    }

    currentUrl = toEncodedUrl(file);
    document.getElementById('welcomeCard').style.display        = 'none';
    document.getElementById('pdfViewerContainer').style.display = 'block';

    pdfjsLib.getDocument(currentUrl).promise.then(pdf => {
        pdfDoc = pdf;
        renderAllPages();
    }).catch(() => {
        document.getElementById('pdfViewerContainer').style.display = 'none';
        document.getElementById('welcomeCard').style.display = '';
        showToast('PDF файл олдсонгүй: ' + file);
    });
}

function renderAllPages() {
    if (!pdfDoc) return;
    const viewer = document.getElementById('viewer');
    viewer.innerHTML = '';

    /* Use devicePixelRatio for crisp rendering on retina/mobile screens */
    const dpr = window.devicePixelRatio || 1;

    pdfDoc.getPage(1).then(firstPage => {
        const vp1 = firstPage.getViewport({ scale: 1 });
        /* CSS width of viewer minus small padding, then scale up by dpr for sharpness */
        const cssWidth = viewer.clientWidth - 8;
        scale = Math.max(0.25, cssWidth / vp1.width);

        const renderPageToCanvas = (i) => {
            return pdfDoc.getPage(i).then(page => {
                /* Render at dpr * scale for high-DPI, display at CSS size */
                const vp = page.getViewport({ scale: scale * dpr });
                const canvas = document.createElement('canvas');
                canvas.width  = vp.width;
                canvas.height = vp.height;
                /* CSS size = physical pixels / dpr → looks crisp */
                canvas.style.width  = (vp.width  / dpr) + 'px';
                canvas.style.height = (vp.height / dpr) + 'px';
                canvas.style.display = 'block';
                canvas.style.margin  = '4px auto';
                canvas.className = 'pdf-page-canvas';
                viewer.appendChild(canvas);
                const ctx = canvas.getContext('2d');
                return page.render({ canvasContext: ctx, viewport: vp }).promise;
            });
        };

        let seq = Promise.resolve();
        for (let i = 1; i <= pdfDoc.numPages; i++) {
            seq = seq.then(() => renderPageToCanvas(i));
        }
        return seq;
    });
}

/* ── TOOLBAR BUTTONS ── */
const _download = document.getElementById('downloadPdf');
if (_download) _download.onclick = () => {
    if (!currentUrl) return;
    const filename = currentUrl.split('/').pop().split('?')[0];
    fetch(currentUrl)
        .then(resp => { if (!resp.ok) throw new Error(); return resp.blob(); })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = decodeURIComponent(filename);
            document.body.appendChild(a); a.click();
            a.remove(); URL.revokeObjectURL(url);
            showToast('Файл татаж авлаа');
        })
        .catch(() => { window.open(currentUrl, '_blank'); });
};

const _copyLink = document.getElementById('copyLink');
if (_copyLink) _copyLink.onclick = () => {
    if (!currentUrl) return;
    /* Works in HTTP, HTTPS, and iframe contexts */
    try {
        const ta = document.createElement('textarea');
        ta.value = currentUrl;
        ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast('Холбоос хуулж авлаа');
    } catch(e) {
        /* Modern API as last resort */
        navigator.clipboard && navigator.clipboard.writeText(currentUrl)
            .then(() => showToast('Холбоос хуулж авлаа'));
    }
};

/* ── TOAST ── */
function showToast(msg) {
    try {
        const el = document.createElement('div');
        el.className = 'toast align-items-center text-bg-secondary border-0 position-fixed bottom-0 end-0 m-3';
        el.style.zIndex = 9999;
        el.setAttribute('role', 'alert');
        el.innerHTML = `<div class="d-flex"><div class="toast-body">${msg}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
        document.body.appendChild(el);
        new bootstrap.Toast(el, { delay: 2200 }).show();
        el.addEventListener('hidden.bs.toast', () => el.remove());
    } catch (e) { alert(msg); }
}