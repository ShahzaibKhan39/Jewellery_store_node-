export const DEVELOPERS = [
  {
    name: "",
    email: "khokhart097@gmail.com",
    phone: "+92 300 4151320",
  },
  {
    name: "",
    email: "shahzaibkhan39@gmail.com",
    phone: "+92 370 8300032",
  },
];

export const ADDRESS = "Cantt, Lahore, Pakistan";

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;
export const mailHref = (email) => `mailto:${email}`;
export const displayName = (dev) => dev.name || dev.email;