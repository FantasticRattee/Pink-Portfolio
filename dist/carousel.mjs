export function stepIndex(current, step, count) {
  if (count <= 0) return 0;
  return ((current + step) % count + count) % count;
}

export function swipeStep(distance, threshold = 40) {
  if (Math.abs(distance) < threshold) return 0;
  return distance > 0 ? -1 : 1;
}

export function offsetFromActive(index, active, count) {
  if (count <= 0) return 0;
  let distance = index - active;
  if (distance > count / 2) distance -= count;
  if (distance < -count / 2) distance += count;
  return distance;
}

export function cardCenterOffset(index, active, widths, scaleForDistance, gap = 0) {
  const count = widths.length;
  const distance = offsetFromActive(index, active, count);
  const direction = Math.sign(distance);
  let offset = 0;
  for (let step = 1; step <= Math.abs(distance); step += 1) {
    const near = stepIndex(active, direction * (step - 1), count);
    const far = stepIndex(active, direction * step, count);
    offset += (widths[near] * scaleForDistance(step - 1)
      + widths[far] * scaleForDistance(step)) / 2 + gap;
  }
  return direction * offset;
}
