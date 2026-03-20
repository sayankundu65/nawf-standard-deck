/**
 * Module-level singleton for global "exclusive unmute" logic.
 *
 * Only one video can be unmuted at a time across the entire page.
 * When a video claims the unmute, all other subscribed videos receive
 * an event and should mute themselves.
 */

type MuteListener = (unmuteOwner: string) => void;

const listeners = new Set<MuteListener>();
let currentOwner: string | null = null;

/**
 * Call this when the user unmutes a specific video.
 * All OTHER videos will receive the event and should mute themselves.
 */
export function claimUnmute(ownerId: string) {
  currentOwner = ownerId;
  listeners.forEach((fn) => fn(ownerId));
}

/**
 * Subscribe to unmute events. Returns an unsubscribe function.
 */
export function onUnmuteClaimed(fn: MuteListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * Returns the ID of the currently unmuted video, or null if all muted.
 */
export function getCurrentUnmuteOwner(): string | null {
  return currentOwner;
}
