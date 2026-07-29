import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

type FileItem = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon: string;
  size?: string;
  modified?: string;
};

const sampleFiles: FileItem[] = [
  { id: 'welcome', name: 'welcome.txt', type: 'file', icon: '/icons/text.png', size: '1 KB', modified: 'Today' },
  { id: 'ideas', name: 'ideas.doc', type: 'file', icon: '/icons/word.png', size: '45 KB', modified: 'Yesterday' },
  { id: 'weekend', name: 'weekend-plan.rtf', type: 'file', icon: '/icons/word.png', size: '12 KB', modified: 'Today' },
  { id: 'wallpaper', name: 'wallpaper.bmp', type: 'file', icon: '/icons/image.png', size: '2.3 MB', modified: '2 days ago' },
  { id: 'links', name: 'links.url', type: 'file', icon: '/icons/url.png', size: '0 KB', modified: 'Today' },
  { id: 'resume', name: 'resume.pdf', type: 'file', icon: '/icons/resume.png', size: '245 KB', modified: 'Today' },
  { id: 'vfat', name: 'vfat.github.io', type: 'folder', icon: '/icons/folder.png', size: 'Folder', modified: 'Today' },
  { id: 'newfolder', name: 'New Folder', type: 'folder', icon: '/icons/folder.png', size: 'Folder', modified: 'Today' },
];

const MyDocuments: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string>('My Documents');
  const [viewMode, setViewMode] = useState<'icons' | 'details'>('icons');

  const handleDoubleClick = (file: FileItem) => {
    if (file.type === 'folder') {
      setSelectedFolder(file.name);
      // In a real app, this would navigate to subfolder
    } else {
      // Open file (for now, just alert or console)
      alert(`Opening ${file.name}... (demo)`);
    }
  };

  return (
    <div className="my-documents-window">
      {/* Toolbar */}
      <div className="my-documents-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-btn">File</button>
          <button className="toolbar-btn">Edit</button>
          <button className="toolbar-btn">View</button>
          <button className="toolbar-btn">Favorites</button>
          <button className="toolbar-btn">Tools</button>
          <button className="toolbar-btn">Help</button>
        </div>
        <div className="toolbar-right">
          <span className="path">{selectedFolder}</span>
          <div className="view-buttons">
            <button 
              className={`view-btn ${viewMode === 'icons' ? 'active' : ''}`}
              onClick={() => setViewMode('icons')}
            >
              📄 Icons
            </button>
            <button 
              className={`view-btn ${viewMode === 'details' ? 'active' : ''}`}
              onClick={() => setViewMode('details')}
            >
              📋 Details
            </button>
          </div>
        </div>
      </div>

      {/* Main Explorer Area */}
      <div className="my-documents-content">
        {/* Left: Folder Tree */}
        <div className="folder-tree">
          <div className="tree-item active">
            <span className="tree-icon">📁</span>
            My Documents
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            My Pictures
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            My Music
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            Downloads
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            Control Panel
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            Printers
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            Dial-Up Networking
          </div>
          <div className="tree-item">
            <span className="tree-icon">📁</span>
            Network Neighborhood
          </div>
        </div>

        {/* Right: File List / Icons */}
        <div className="file-list">
          {viewMode === 'icons' ? (
            <div className="icon-view">
              {sampleFiles.map((file) => (
                <div 
                  key={file.id}
                  className="file-icon"
                  onDoubleClick={() => handleDoubleClick(file)}
                >
                  <img src={file.icon} alt={file.name} width="48" height="48" />
                  <span className="file-name">{file.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <table className="details-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Modified</th>
                </tr>
              </thead>
              <tbody>
                {sampleFiles.map((file) => (
                  <tr 
                    key={file.id}
                    onDoubleClick={() => handleDoubleClick(file)}
                    className="file-row"
                  >
                    <td>
                      <img src={file.icon} alt="" width="16" height="16" />
                      {file.name}
                    </td>
                    <td>{file.size}</td>
                    <td>{file.modified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="my-documents-statusbar">
        <div>2 items</div>
        <div>Free space: 2.1 GB</div>
      </div>
    </div>
  );
};

export default MyDocuments;
