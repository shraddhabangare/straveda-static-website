'use client';

/**
 * GlobalWidgets — mounted once in the root layout.
 *
 * Renders two fixed-position elements in the bottom-right corner:
 *   [AI Chatbot toggle + panel]   ← stacked above
 *   [WhatsApp float button]       ← at the bottom
 *
 * These stay visible on every page and survive client-side navigation
 * because they live outside the <AnimatePresence> / page swap boundary.
 */

import { useTheme } from 'next-themes';
import WAFloat from '@/components/straveda/WAFloat';

export default function GlobalWidgets() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      style={{
        position: 'fixed',
        bottom:   24,
        right:    24,
        zIndex:   9999,
        display:  'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      {/* WhatsApp float button */}
      <WAFloat />
    </div>
  );
}
