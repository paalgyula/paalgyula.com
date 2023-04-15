interface ICompany {
  name: string;
  address: string;
  image: {
    source: string;
    height: number;
    width: number;
  };
}

interface IExperience {
  jobTitle: string;
  employer: ICompany;
  description: string;
  from: string;
  to?: string;
  technologies: string[];
}
