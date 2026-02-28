const evidence = {
  newspaper: {
    title: 'Campus Newspaper Bulletin',
    body: `
      <p>Code-Red Hackathon ended in tragedy at 3:15 AM in Server Room B.02.</p>
      <p>Witnesses reported a sudden suppression event and an alarm bypass.</p>
      <p><strong>Lead:</strong> RFID access associated with Maya's tag before the collapse.</p>
    `
  },
  notes: {
    title: 'Detective Notes',
    body: `
      <ul>
        <li>No forced entry, electronic override only.</li>
        <li>Temperature dropped quickly right before failure cascade.</li>
        <li>Phrase repeated in logs: <code>NAPROOM_OVERRIDE</code>.</li>
      </ul>
    `
  },
  autopsy: {
    title: 'Autopsy Report',
    body: `
      <p>Cause of death: severe hypercapnia due to acute CO₂ displacement.</p>
      <p>Time-to-collapse was under 90 seconds.</p>
      <p>Forensic marker: valve sequence signature <code>4F2A</code>.</p>
    `
  },
  logs: {
    title: 'Access Logs',
    body: `
      <pre>
02:30:11 ARJUN_99 Entry
02:45:00 MAYA_01 Entry
02:45:05 MAYA_01 Exit
03:12:47 CO2_GRID: armed
03:14:08 Suppression route changed: B.02
      </pre>
      <p>Numeric sequence appears in debug footer: <code>506</code>.</p>
    `
  },
  transcriptA: {
    title: 'Interrogation — Maya',
    body: `
      <p>"I was in the nap room after 2:40 and never touched the room panel."</p>
      <p>Network packet logs dispute this claim with a remote relay burst.</p>
      <p>Known key phrase: <code>MAYA_01_RFID</code>.</p>
    `
  },
  matrix: {
    title: 'Participant Matrix',
    body: `
      <table>
        <tr><th>Name</th><th>Device</th><th>Flag</th></tr>
        <tr><td>Maya</td><td>Prototype control tablet</td><td>device route modified</td></tr>
        <tr><td>Arjun</td><td>Laptop</td><td>victim</td></tr>
        <tr><td>Chloe</td><td>Audit terminal</td><td>reported anomaly</td></tr>
      </table>
      <p>Device clue string: <code>DEVICE_CO2_VALVE</code>.</p>
    `
  },
  timeline: {
    title: 'Timeline Puzzle Board',
    body: `
      <p>Order these events using command:</p>
      <ol>
        <li>Manual override request</li>
        <li>RFID ping from Maya</li>
        <li>CO₂ channel armed</li>
        <li>Suppression reroute to B.02</li>
      </ol>
      <p>Submit as <code>TIMELINE 2-1-3-4</code>.</p>
    `
  }
};