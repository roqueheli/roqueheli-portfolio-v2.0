import React from 'react';
import socialData from '../../data/socialData';

function footer() {
    return (
        <footer id="footer">
        <div class="footer footer_container">
          <div class="brand">
            <h1><span>R</span>oqueheli <span>A</span>renas</h1>
          </div>
          <div class="social-icon">
            {socialData.map((social) => {
              return (
                <div class="social-item">
                  <a href={social.url}><img src={social.photo} alt={social.name}/></a>
                </div>
              );
            })}
          </div>
          <p>Copyright © 2022 Arenas. All rights reserved</p>
        </div>
      </footer>
    )
}

export default footer;
