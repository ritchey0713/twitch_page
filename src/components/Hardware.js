import React from 'react'
import './Hardware.css'
import Navbar from '../components/static/Navbar.js'
import Footer from '../components/static/Footer.js'
import Jumbotron from '../components/static/Jumbotron'

import CPU from './images/cpu.jpg'
import MotherBoard from './images/motherboard.jpg'
import GPU from './images/gpu.jpg'
import PSU from './images/psu.jpg'
import KeyBoard from './images/keyboard.jpg'
import SSD from './images/ssd.jpg'
import RAM from './images/ram.jpg'
import Cooler from './images/cooler.jpg'
import Case from './images/case.jpg'
import Mouse from './images/mouse.jpg'
import Headset from './images/headset.jpg'
import Camera from './images/camera.jpg'
import Mic from './images/mic.jpg'

const Hardware = () => (
  <div>
  <Navbar />
  <Jumbotron title={"Hardware, and peripherals"}/>
  <div className='container'>
    <div className="grid">

    <div className='row'>
      <div className="col-sm">CPU</div>
      <div className="col-sm">
        <a href={`https://www.amazon.com/Intel-i7-8700K-Desktop-Processor-Unlocked/dp/B07598VZR8/ref=sr_1_1?ie=UTF8&qid=1536092226&sr=8-1&keywords=8700k`}>
          <img src={CPU} alt="CPU"/>
        </a>
        I7 8700K
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Motherboard</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/s/ref=nb_sb_ss_c_1_6?url=search-alias%3Delectronics&field-keywords=z370+taichi&sprefix=taichi%2Celectronics%2C152&crid=2P498XX9KIP4O`}>
        <img src={MotherBoard} alt="MotherBoard"/>
      </a>
      AsRock Z370 Taichi
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">GPU</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/XFX-Radeon-1425MHz-Graphics-RX-580P8DBD6/dp/B071CD6K6Z/ref=sr_1_1?s=electronics&ie=UTF8&qid=1536094034&sr=1-1&keywords=rx+580+black+edition`}>
        <img src={GPU} alt="GPU"/>
      </a>
      Radeon RX 580 Black Edition
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">PSU</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/CORSAIR-HX1000i-Modular-Platinum-Certified/dp/B00M2UINT6/ref=sr_1_1?s=electronics&ie=UTF8&qid=1536094399&sr=1-1&keywords=corsair+900+psu`}>
        <img src={PSU} alt="PSU"/>
      </a>
      Corsair HX1000i
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Keyboard</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Razer-BlackWidow-Chroma-Mechanical-Ergonomic/dp/B01MYZYPYH/ref=sr_1_18?s=electronics&ie=UTF8&qid=1536094589&sr=1-18&keywords=razer+keyboard+mechanical`}>
        <img src={KeyBoard} alt="KeyBoard"/>
      </a>
      Razer BlackWidow Green Switches
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">SSD</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Samsung-960-EVO-Internal-MZ-V6E500BW/dp/B01M20VBU7/ref=sr_1_7?s=electronics&ie=UTF8&qid=1536094751&sr=1-7&keywords=samsung+ssd`}>
        <img src={SSD} alt="SSD"/>
      </a>
      Samsung 960 EVO 500GB
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">RAM</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/G-SKILL-TridentZ-288-Pin-Desktop-F4-3200C16Q-32GTZR/dp/B01MSBS0UT/ref=sr_1_3?s=electronics&ie=UTF8&qid=1536094934&sr=1-3&keywords=trident+ram`}>
        <img src={RAM} alt="RAM"/>
      </a>
      G.SKILL 32 Gig DDR4 SDRAM
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Cooling</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Thermaltake-Premium-Efficiency-Radiator-CL-W158-PL12SW/dp/B07537Q8LV/ref=sr_1_3?s=electronics&ie=UTF8&qid=1536095187&sr=1-3&keywords=aio+liquid+cooler`}>
        <img src={Cooler} alt="Cooler"/>
      </a>
      Thermaltake 360 TT AIO
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Case</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Cooler-Master-MCW-L5S3-KANN-01-MasterBox-Customizable/dp/B0718W92D7/ref=sr_1_3?s=electronics&ie=UTF8&qid=1536095406&sr=1-3&keywords=COoler+master+case`}>
        <img src={Case} alt="Case"/>
      </a>
      Cooler Master ATX Mid-Tower
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Mouse</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Logitech-Spectrum-Shifting-Personalized-Programmable/dp/B019OB663A/ref=sr_1_1?s=electronics&ie=UTF8&qid=1536095526&sr=1-1&keywords=logitech+g502`}>
        <img src={Mouse} alt="Mouse"/>
      </a>
      Logitech G502
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Headset</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/SteelSeries-Arctis-Wireless-Headset-playstation-4/dp/B079YBKT3H/ref=sr_1_2_sspa?s=electronics&ie=UTF8&qid=1536096403&sr=1-2-spons&keywords=steelseries%2Barctis%2B7&th=1`}>
        <img src={Headset} alt="Headset"/>
      </a>
      Steel Series Artis 7
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Camera</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK/ref=sr_1_1?s=electronics&ie=UTF8&qid=1536096575&sr=1-1&keywords=c922`}>
        <img src={Camera} alt="Camera"/>
      </a>
      Logictech C922X
      </div>
      </div>

      <div className='row'>
      <div className="col-sm">Mic</div>
      <div className="col-sm">
      <a href={`https://www.amazon.com/Blue-Yeti-USB-Microphone-Blackout/dp/B00N1YPXW2/ref=sr_1_1?s=electronics&ie=UTF8&qid=1536096673&sr=1-1&keywords=blue+yeti+blackout+edition`}>
        <img src={Mic} alt="Mic"/>
      </a>
      Blue Yeti Blackout Edition
      </div>
      </div>

    </div>
  </div>
  <Footer />
  </div>
)

export default Hardware
