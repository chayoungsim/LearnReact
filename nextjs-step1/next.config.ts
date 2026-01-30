import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: process.cwd(), // 현재 디렉토리를 루트로 설정
  }
};

export default nextConfig;