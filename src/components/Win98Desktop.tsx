import { useEffect, useMemo, useState } from 'react';
import { Rnd } from 'react-rnd';

type DesktopIcon = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  content: string;
};

type WindowState = {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
};

const baseIcons: DesktopIcon[] = [
  {
    id: 'computer',
    label: 'My Computer',
    icon: '/icons/computer.png',
    x: 24,
    y: 24,
    width: 98,
    height: 104,
    title: 'My Computer',
    content:
      'Drive C:\\  (2.1 GB free of 4.0 GB)\\nDrive D:\\  CD-ROM\\nControl Panel\\nPrinters\\nDial-Up Networking',
  },
  {
    id: 'documents',
    label: 'My Documents',
    icon: '/icons/documents.png',
    x: 24,
    y: 146,
    width: 98,
    height: 104,
    title: 'My Documents',
    content:
      'welcome.txt\\nideas.doc\\nweekend-plan.rtf\\nwallpaper.bmp\\nlinks.url',
  },
  {
    id: 'notepad',
    label: 'Notepad',
    icon: '/icons/notepad.png',
    x: 24,
    y: 268,
    width: 98,
    height: 104,
    title: 'Notepad',
    content:
      'hello from winlike desktop!\\n\\n- drag this window\\n- resize from any edge\\n- feel the late 90s energy',
  },
  {
    id: 'credits',
    label: 'credits.txt',
    icon: '/icons/credits.png',
    x: 24,
    y: 390,
    width: 98,
    height: 104,
    title: 'credits.txt - Notepad',
    content:
      'Inspired by: https://winbows98.github.io/\\nIcons: https://win98icons.alexmeub.com/\\nBuilt with: Astro + React + Tailwind\\nDate: April 14, 2026',
  },
];

export default function Win98Desktop() {
  const [icons, setIcons] = useState<DesktopIcon[]>(baseIcons);
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [zCounter, setZCounter] = useState(5);
  const [startOpen, setStartOpen] = useState(false);
  const [timeLabel, setTimeLabel] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeLabel(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    };

    updateClock();
    const timer = window.setInterval(updateClock, 15_000);
    return () => window.clearInterval(timer);
  }, []);

  const taskItems = useMemo(() => windows, [windows]);

  const bringToFront = (id: string) => {
    setZCounter((prev) => {
      const nextZ = prev + 1;
      setWindows((current) =>
        current.map((win) => (win.id === id ? { ...win, z: nextZ } : win)),
      );
      return nextZ;
    });
  };

  const openWindow = (icon: DesktopIcon) => {
    setStartOpen(false);
    setWindows((current) => {
      const existing = current.find((win) => win.id === icon.id);
      if (existing) {
        const nextZ = zCounter + 1;
        setZCounter(nextZ);
        return current.map((win) =>
          win.id === icon.id ? { ...win, z: nextZ } : win,
        );
      }

      const nextZ = zCounter + 1;
      setZCounter(nextZ);

      const offset = current.length * 24;
      return [
        ...current,
        {
          id: icon.id,
          title: icon.title,
          content: icon.content,
          x: 180 + offset,
          y: 96 + offset,
          width: 440,
          height: 280,
          z: nextZ,
        },
      ];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((current) => current.filter((win) => win.id !== id));
  };

  return (
    <main className="win98-desktop" onClick={() => setStartOpen(false)}>
      <div className="scanline-layer" aria-hidden="true" />

      {icons.map((icon) => (
        <Rnd
          key={icon.id}
          bounds="parent"
          default={{
            x: icon.x,
            y: icon.y,
            width: icon.width,
            height: icon.height,
          }}
          minWidth={84}
          minHeight={92}
          onDragStop={(_, data) => {
            setIcons((current) =>
              current.map((item) =>
                item.id === icon.id ? { ...item, x: data.x, y: data.y } : item,
              ),
            );
          }}
          onResizeStop={(_, __, ref, ___, position) => {
            setIcons((current) =>
              current.map((item) =>
                item.id === icon.id
                  ? {
                      ...item,
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                      x: position.x,
                      y: position.y,
                    }
                  : item,
              ),
            );
          }}
          className="desktop-icon-rnd"
        >
          <button
            type="button"
            className="desktop-icon"
            onDoubleClick={(event) => {
              event.stopPropagation();
              openWindow(icon);
            }}
            onClick={(event) => event.stopPropagation()}
            title={`Open ${icon.label}`}
          >
            <img src={icon.icon} alt={icon.label} width="48" height="48" />
            <span>{icon.label}</span>
          </button>
        </Rnd>
      ))}

      {windows.map((win) => (
        <Rnd
          key={win.id}
          bounds="parent"
          size={{ width: win.width, height: win.height }}
          position={{ x: win.x, y: win.y }}
          minWidth={320}
          minHeight={180}
          style={{ zIndex: win.z }}
          dragHandleClassName="window-title"
          onMouseDown={() => bringToFront(win.id)}
          onDragStart={() => bringToFront(win.id)}
          onDragStop={(_, data) => {
            setWindows((current) =>
              current.map((item) =>
                item.id === win.id ? { ...item, x: data.x, y: data.y } : item,
              ),
            );
          }}
          onResizeStop={(_, __, ref, ___, position) => {
            setWindows((current) =>
              current.map((item) =>
                item.id === win.id
                  ? {
                      ...item,
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                      x: position.x,
                      y: position.y,
                    }
                  : item,
              ),
            );
          }}
          className="window-rnd"
        >
          <section className="win98-window" onMouseDown={() => bringToFront(win.id)}>
            <header className="window-title">
              <strong>{win.title}</strong>
              <button
                type="button"
                className="window-close"
                onClick={() => closeWindow(win.id)}
                aria-label={`Close ${win.title}`}
              >
                ×
              </button>
            </header>
            <div className="window-content">
              <pre>{win.content}</pre>
            </div>
          </section>
        </Rnd>
      ))}

      <footer
        className="taskbar"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="start-button"
          onClick={() => setStartOpen((prev) => !prev)}
        >
          <img src="/icons/windows-0.png" alt="Start" width="20" height="20" />
          <span>Start</span>
        </button>

        <div className="task-items">
          {taskItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="task-item"
              onClick={() => bringToFront(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="clock">{timeLabel || '12:00 AM'}</div>
      </footer>

      {startOpen && (
        <aside className="start-menu" onClick={(event) => event.stopPropagation()}>
          <div className="start-strip">Vfat 87</div>
          <div className="start-content">
            {baseIcons.map((icon) => (
              <button
                key={`menu-${icon.id}`}
                type="button"
                className="start-item"
                onClick={() => openWindow(icon)}
              >
                <img src={icon.icon} alt="" width="20" height="20" />
                <span>{icon.label}</span>
              </button>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
}
