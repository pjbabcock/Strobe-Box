<h1>
  Strobe Box
</h1>
<h2>
  Welcome to Strobe Box!
</h2>
<p>
  Select a speed and click the box to strobe.
  Click again to stop the strobe.
</p>
<div>
<div class="row">
<div class="column">
  <div id="box" 
    class="blue-box" 
    onclick="_isStrobing ? stopBoxStrobe() : startBoxStrobe()"
  >
    <div id="text" class="text-center">
      STROBE
   </div>
  </div>
  <button class="ColorButton" onclick="changeBoxColor()">
    Change Colors
</button>
</div>
<div class="column">
<h3>
Speed
</h3>
 <input 
   type="range" 
   id="speed" 
   name="volume" 
   min="0"
   value="500"
   max="1000"
   oninput="changeStrobeSpeed(this.value)"
 />
 <div id="speed-value">
   500ms
 </div>
</div>
</div>
</div>
