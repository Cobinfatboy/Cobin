let stats = {
  pushup: 0,
  dip: 0,
  pullup: 0,
  statPoints: 0
};

function logExercise(type) {
  stats[type]++;
  stats.statPoints++;
  updateStats();
}

function updateStats() {
  document.getElementById('pushups').textContent = stats.pushup;
  document.getElementById('dips').textContent = stats.dip;
  document.getElementById('pullups').textContent = stats.pullup;
  document.getElementById('statPoints').textContent = stats.statPoints;
}

updateStats();
