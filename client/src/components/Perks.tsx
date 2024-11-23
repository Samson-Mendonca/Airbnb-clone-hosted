

export default function Perks({selected,onChange}) {

  function handleClick(ev) {
const {checked,name} = ev.target;
if(checked){
  onChange([...selected,name]);
}else{
  onChange([...selected.filter(selectedName => selectedName !== name)]);
}

  }

    return (
     <>
     <label  className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Wifi')} name="Wifi" onChange={handleClick} />
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-Wifi"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l.01 0" /><path d="M9.172 15.172a4 4 0 0 1 5.656 0" /><path d="M6.343 12.343a8 8 0 0 1 11.314 0" /><path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" /></svg>
            <span>Wifi</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Parking')} name="Parking" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-car-garage"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /><path d="M3 6l9 -4l9 4" /></svg>
            <span>Free Parking on premises</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Pets Allowed')} name="Pets Allowed" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-paw"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" /><path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" /><path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" /><path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" /><path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" /></svg>
            <span>Pets Allowed</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Tv')} name="Tv" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /></svg>
            <span>Tv</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Breakfast')} name="Breakfast" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg>
            <span>Breakfast</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Hot Water')} name="Hot Water" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg>
            <span>Hot Water</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Bathroom Supplies')} name="Bathroom Supplies" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bath"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" /><path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" /><path d="M4 21l1 -1.5" /><path d="M20 21l-1 -1.5" /></svg>
            <span>Bathroom Supplies</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Extra Beds')} name="Extra Beds" onChange={handleClick}/>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bed">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M22 17v-3h-20" />
    <path d="M2 8v9" />
    <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
  </svg>
            <span>Extra Beds</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('AC')} name="AC" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-air-conditioning"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 16a3 3 0 0 1 -3 3" /><path d="M16 16a3 3 0 0 0 3 3" /><path d="M12 16v4" /><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" /></svg>
            <span>Air conditioning</span>
          </label>
          <label className="border rounded-2xl p-4 flex items-center gap-2 ">
            <input type="checkbox" checked={selected.includes('Private Entrance')} name="Private Entrance" onChange={handleClick}/>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-door"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 12v.01" /><path d="M3 21h18" /><path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" /></svg>
            <span>Private Entrance</span>
          </label>
     </>
    )
  }
  