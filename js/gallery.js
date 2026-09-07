/* Gallery data + before/after lightbox */
var SHOTS = [
  {
    "title": "Kicked in door",
    "before": "Corolla_door_before1.jpg",
    "after": "Corolla_door_after1.jpg"
  },
  {
    "title": "Deep sharp crease across body line",
    "before": "Pictures/Sienna_quarter_before.jpg",
    "after": "Pictures/Sienna_quarter_after.jpg"
  },
  {
    "title": "Rear wheel-well dent",
    "before": "Pictures/CX-5-Before.jpg",
    "after": "Pictures/CX-5-After.jpg"
  },
  {
    "title": "Run in with a snow blower",
    "before": "Pictures/Terrain_Before.jpg",
    "after": "Pictures/Terrain_After.jpg"
  },
  {
    "title": "Nissan Juke fender",
    "before": "Pictures/Juke_before1.jpg",
    "after": "Pictures/Juke_after1.jpg"
  },
  {
    "title": "Large fender dent over wheel well",
    "before": "Pictures/civic-fender-before.jpg",
    "after": "Pictures/Civic-fender-after1.jpg"
  },
  {
    "title": "Multiple door dings",
    "before": "Pictures/Golf_GTI_before.png",
    "after": "Pictures/Golf_GTI_after.png"
  },
  {
    "title": "Large hail on fender",
    "before": "Pictures/Left-fender-3OS.jpg",
    "after": "Pictures/Civic-hail-fender-after.jpg"
  },
  {
    "title": "Dented door",
    "before": "Pictures/CRV-door-before1.jpg",
    "after": "Pictures/CRV-door-after.jpg"
  },
  {
    "title": "Camry fender dent",
    "before": "Pictures/Camry-fender-before.jpg",
    "after": "Pictures/Camry-fender-after.jpg"
  },
  {
    "title": "Sharp hood dent",
    "before": "Z3_hood_before.jpg",
    "after": "Z3_hood_after.jpg"
  },
  {
    "title": "Fender dent",
    "before": "Rav4_fender_before.jpg",
    "after": "Rav4_fender_after.jpg"
  },
  {
    "title": "Range Rover fender dent",
    "before": "Pictures/LR4-fender-before.jpg",
    "after": "Pictures/LR4-fender-after.jpg"
  },
  {
    "title": "Sharp fender dents",
    "before": "Pictures/Rav4_before.jpg",
    "after": "Pictures/Rav4_after.jpg"
  },
  {
    "title": "Baseball dent",
    "before": "Pictures/RAM1500_before.jpg",
    "after": "Pictures/RAM1500_after.jpg"
  },
  {
    "title": "Jumbled hood",
    "before": "Pictures/Cruze_hood_before.jpg",
    "after": "Pictures/Cruze_hood_after.jpg"
  },
  {
    "title": "Sharp dent on rear wheel well",
    "before": "Pictures/CRV-quarter-before.jpg",
    "after": "Pictures/CRV-quarter-after.jpg"
  },
  {
    "title": "Crease on a roof",
    "before": "Pictures/BMW_328_before1.jpg",
    "after": "Pictures/BMW_328_after1.jpg"
  },
  {
    "title": "Large quarter panel dent",
    "before": "Odyssey_quarter_before.jpg",
    "after": "Odyssey_quarter_after.jpg"
  },
  {
    "title": "Backed-in fender",
    "before": "Pictures/Pontiac_G5_before.jpg",
    "after": "Pictures/Pontiac_G5_after.jpg"
  },
  {
    "title": "Large hail dent",
    "before": "LS460_roof_before.jpg",
    "after": "LS460_roof_after.jpg"
  },
  {
    "title": "Fender after run in with tree",
    "before": "Odyssey_fender_before.jpg",
    "after": "Odyssey_fender_after.jpg"
  },
  {
    "title": "Sharp dent on GTI",
    "before": "GTI_before.jpg",
    "after": "GTI_after.jpg"
  },
  {
    "title": "Rigid bodyline dent",
    "before": "RX350_fender_before.jpg",
    "after": "RX350_fender_after.jpg"
  },
  {
    "title": "Deep door dings",
    "before": "Impreza_before.jpg",
    "after": "Impreza_after.jpg"
  },
  {
    "title": "Bodyline of aluminum hood",
    "before": "Fusion_hood_before.jpg",
    "after": "Fusion_hood_after.jpg"
  },
  {
    "title": "Sharp ding on fender",
    "before": "Cruze_before.jpg",
    "after": "Cruze_after.jpg"
  },
  {
    "title": "Back wheel-well dent",
    "before": "Civic_Rear_quarter_before.jpg",
    "after": "Civic_Rear_quarter_after.jpg"
  },
  {
    "title": "Motorcycle tank",
    "before": "Pictures/motorcycle_tank_before.jpg",
    "after": "Pictures/motorcycle_tank_after.jpg"
  },
  {
    "title": "Golf ball size hail",
    "before": "BMW328_before.jpg",
    "after": "BMW328_after.jpg"
  },
  {
    "title": "Creases",
    "before": "Pictures/Fusion_door_before1.jpg",
    "after": "Fusion_door_after1.jpg"
  },
  {
    "title": "Front wheel well damage",
    "before": "Pictures/Equinox_before.jpg",
    "after": "Pictures/Equinox_after2.jpg"
  }
];

(function () {
  var grid = document.getElementById('gallery-grid');
  if (!grid) return;

  var box = document.getElementById('lightbox');
  var boxTitle = document.getElementById('lightbox-title');
  var boxBefore = document.getElementById('lightbox-before');
  var boxAfter = document.getElementById('lightbox-after');

  SHOTS.forEach(function (shot, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'shot';
    btn.innerHTML =
      '<span class="shot__frame">' +
      '<img loading="lazy" alt="" />' +
      '<span class="shot__tag">Before</span></span>' +
      '<span class="shot__title"></span>';
    btn.querySelector('.shot__frame img').src = 'images/' + shot.before;
    btn.querySelector('.shot__frame img').alt = shot.title + ' before repair';
    btn.querySelector('.shot__title').textContent = shot.title;
    btn.addEventListener('click', function () { open(i); });
    grid.appendChild(btn);
  });

  function open(i) {
    var shot = SHOTS[i];
    boxTitle.textContent = shot.title;
    boxBefore.src = 'images/' + shot.before;
    boxBefore.alt = shot.title + ' before repair';
    boxAfter.src = 'images/' + shot.after;
    boxAfter.alt = shot.title + ' after repair';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.hidden = true;
    document.body.style.overflow = '';
  }

  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.classList.contains('lightbox__close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
})();
