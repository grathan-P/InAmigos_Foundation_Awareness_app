async function imageToDataURL(url) {
  try {
    const res = await fetch(url, { mode: 'cors' });
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    return null;
  }
}

export default async function shareProject(project = {}) {
  const { id = 'project', title = 'Project', description = '', metric = '', img = '' } = project;

  let imgData = '';
  if (img) {
    const data = await imageToDataURL(img).catch(() => null);
    if (data) imgData = `<img src="${data}" alt="${title}" style="max-width:100%;height:auto;border-radius:8px;margin-top:12px;"/>`;
  }

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;background:#fff;color:#111;padding:24px}
    .card{max-width:900px;margin:0 auto;border:1px solid #eee;padding:24px;border-radius:12px;box-shadow:0 6px 24px rgba(16,24,40,0.06)}
    h1{color:#b91c1c;margin:0 0 8px}
    .meta{color:#6b7280;font-size:14px;margin-bottom:14px}
    p{line-height:1.6;color:#374151}
    .badge{display:inline-block;background:#fff;border:1px solid #f3f4f6;padding:6px 10px;border-radius:9999px;color:#111;font-weight:700}
  </style>
</head>
<body>
  <div class="card">
    <h1>${escapeHtml(title)}</h1>
    <div class="meta">${escapeHtml(metric)}</div>
    <div class="badge">Shared from InAmigos Foundation</div>
    <div style="margin-top:16px">${escapeHtml(description)}</div>
    ${imgData}
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${(id || title).toString().replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
