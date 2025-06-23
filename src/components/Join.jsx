import React from 'react';
import { join } from './join';
import TV from './icons/TV';
import Offline from './icons/Offline';
import Watch from './icons/Watch';
import Kids from './icons/Kids';
const iconMap = {
    TV: <TV />,
    Offline: <Offline />,
    Watch: <Watch />,
    Kids: <Kids />,
  };
const Join = () => {
  return (
    <div className=" mx-auto flex gap-2.5 flex-col items-center" style={{ margin: "32px auto", width: "100%" }}>
      <h2 className="text-white align-left text-left font-semibold" style={{ textAlign: "left", fontSize: '1.25em', width: "100%" }}>
        More reasons to join
      </h2>

      <div className="flex md:flex-row flex-col gap-6 w-full ">
        {join.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between flex-1 p-4 rounded-2xl bg-white/10 border border-white/10 transition hover:bg-white/20"
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between",height: "100%", minHeight: "260px",position: "relative",zIndex:'1' }}
          >
                        <div className="flex flex-wrap gap-4 px-6 py-4" style={{ width: "100%", padding: "16px" }}>
              <h4 className="text-2xl font-semibold text-white py-6">{item.title}</h4>
              <p className="text-white leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.70)' }} dangerouslySetInnerHTML={{ __html: item.description }} />

<br></br>
<br></br>

              <div className="text-white text-3xl text-right flex items-end" style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  width: "100%", zIndex:'1'
                }}>
              {iconMap[item.icon]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Join;
