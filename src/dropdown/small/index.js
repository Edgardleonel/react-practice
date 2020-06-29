import React from 'react';
import { Link } from 'react-router-dom';


function DropSmall() {
  return (
    <>
            <div className="submenu-label">
                Tipos de vinhos
            </div>
            <ul>
                <li >
                    <Link>Tinto</Link>
                </li>
                <li>
                    <Link>Branco</Link>
                </li>
                <li>
                    <Link>Rosé</Link>
                </li>
                <li>
                    <Link>Champagne</Link>
                </li>
                <li>
                    <Link>Doce/Fortificado</Link>
                </li>
            </ul>
    </>
  );
}

export default DropSmall;