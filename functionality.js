// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href = a.getAttribute('href');
        if(href.startsWith('#')){
          e.preventDefault(); const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    // Reveal project cards with stagger
    document.querySelectorAll('.projects-grid .project-card').forEach((c,i)=>{
      setTimeout(()=>c.classList.add('show'), 80 * i + 120);
    });

    // Back to top
    const back = document.getElementById('backToTop');
    window.addEventListener('scroll', ()=>{ if(window.scrollY > 420) back.style.display = 'flex'; else back.style.display = 'none'; });
    back.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

    // Modal logic with smooth fade+scale
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTech = document.getElementById('modalTech');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const modalLive = document.getElementById('modalLive');
    const modalRepo = document.getElementById('modalRepo');

    function openModal(data){
      modalTitle.textContent = data.title || 'Project';
      modalTech.textContent = data.tech || ''; modalDesc.textContent = data.desc || '';
      modalImage.src = data.image || 'images/placeholder.jpg';
      modalTags.innerHTML = '';
      (data.tags||[]).forEach(t=>{ const el = document.createElement('span'); el.className = 'chip'; el.textContent = t; modalTags.appendChild(el); });
      if(data.live){ modalLive.href = data.live; modalLive.style.display = 'inline-block'; } else modalLive.style.display = 'none';
      if(data.repo){ modalRepo.href = data.repo; modalRepo.style.display = 'inline-block'; } else modalRepo.style.display = 'none';
      modalBackdrop.style.display = 'flex'; // allow backdrop appear
      // small delay for CSS transition
      requestAnimationFrame(()=> modal.classList.add('open'));
      modalBackdrop.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
    }

    function closeModal(){ modal.classList.remove('open'); setTimeout(()=>{ modalBackdrop.style.display = 'none'; modalBackdrop.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }, 220); }

    document.querySelectorAll('.project-card').forEach(card=>{
      card.addEventListener('click', ()=>{ try{ const raw = card.getAttribute('data-project'); const data = JSON.parse(raw); openModal(data); }catch(e){console.error(e)} });
      card.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.click(); } });
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e)=>{ if(e.target === modalBackdrop) closeModal(); });
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

}); // End DOMContentLoaded