import React from 'react'
import { BsBuildings } from 'react-icons/bs'
import { FaArrowDownUpAcrossLine, FaScrewdriverWrench, FaStar } from 'react-icons/fa6'
import { GoChecklist } from 'react-icons/go'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import { PiFlagPennantFill } from 'react-icons/pi'
import { ASSETS } from '../assets/path'

export const Sidebar = () => {
  return (
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaScrewdriverWrench className="icon" />
          <div className="text-right link">NACHTMODUS</div>
        </div>
        <div className="logo">
          <img src={ASSETS.LOGO} alt="" />
        </div>
        <nav>
          <ul>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <BsBuildings className="margin-right" />
                  <div>Immobilienlexikon</div>
                </div>
                <div className="text-right link">KI</div>
              </div>
              <p className="sub-heading">Immobilienwissen für alle Fälle.</p>
            </li>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <FaArrowDownUpAcrossLine className="margin-right" />
                  <div>Preisschätzung</div>
                </div>
                <div className="text-right link">LINK</div>
              </div>
              <p className="sub-heading">
                Den Wert Ihres Hauses schätzen lassen.
              </p>
            </li>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <GoChecklist className="margin-right" />
                  <div>Checklisten</div>
                </div>
                <div className="text-right link">PDF</div>
              </div>
              <p className="sub-heading">
                Praktische Checklisten für jeden Schritt.
              </p>
            </li>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <GoChecklist className="margin-right" />
                  <div>Ratgeber</div>
                </div>
                <div className="text-right link">PDF</div>
              </div>
              <p className="sub-heading">
                Praktische Checklisten für jeden Schritt.
              </p>
            </li>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <IoNavigateCircleOutline className="margin-right" />
                  <div>Mandatsnavigator</div>
                </div>
                <div className="text-right link">KI</div>
              </div>
              <p className="sub-heading">
                Praktische Checklisten für jeden Schritt.
              </p>
            </li>
            <li className="sidebar-item">
              <div className="space-between">
                <div className="space-between">
                  <PiFlagPennantFill className="margin-right" />
                  <div>Wohntraumfinder</div>
                </div>
                <div className="text-right link">PDF</div>
              </div>
              <p className="sub-heading">
                Praktische Checklisten für jeden Schritt.
              </p>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <img src={ASSETS.AVATAR} alt="profile" />
          <div className="profile-name">Immotrust AG</div>
          <p>
            Vertrauensvolle <br /> Immobilienberatung seit 2008.
          </p>
          <button className="profile-btn">Carlos Kuk - Eigentümer</button>
        </div>
        <div className="google-info">
          <div className="space-between">
            <div className="center">
              <div className="margin-right"><img className="google-image" src={ASSETS.GOOGLE} alt=""/></div>
              <div className="google-text">Bewertungen</div>
            </div>
            <div className="space-between stars">
              <div>
                <FaStar />
              </div>
              <div>
                <FaStar />
              </div>
              <div>
                <FaStar />
              </div>
              <div>
                <FaStar />
              </div>
              <div>
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </aside>
  )}
 
