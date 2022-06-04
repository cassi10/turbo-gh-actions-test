import withTM from "next-transpile-modules";

const nextConfig = withTM(["@scope/ui"])({
  reactStrictMode: true
});

export default nextConfig;
