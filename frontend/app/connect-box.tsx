import { FC, ReactNode } from "react";

import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

type ConnectRowProps = {
  text: string;
  href?: string;
  target?: string;
  icon?: ReactNode;
};

const ConnectRow: FC<ConnectRowProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row gap-2 justify-end content-center items-center">
      <a href="#" className="hover:underline">
        {text}
      </a>
      {icon}
    </div>
  );
};

const ConnnectBox = () => {
  return (
    <div className="p-3 flex flex-col gap-0 text-right">
      <ConnectRow
        icon={<FaPhone className="text-primary" />}
        text="+36 70 171 2997"
      />

      <ConnectRow
        icon={<FaEnvelope className="text-primary" />}
        text="paalgyula87@gmail.com"
      />

      <ConnectRow
        icon={<FaGlobe className="text-primary" />}
        text="paalgyula.com"
      />

      <ConnectRow
        icon={<FaGithub className="text-primary" />}
        text="github.com/paalgyula"
      />

      <ConnectRow
        icon={<FaLinkedin className="text-primary" />}
        text="linkedin.com/in/nev3rkn0wn"
      />
    </div>
  );
};

export default ConnnectBox;
