const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://mongodb:mongodbuser@cluster0.73b3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  stripe_connect_test_client_id: "ca_LPJOyZoCUFlmsoGOfumKmlquHGdmO1MO",
  stripe_test_secret_key:
    "sk_test_51KdPvFBqBuvo2VlvRKuz2RYgam0qTiaZapMa2n9PBg8xnHMU03JLBXvsD0d7mjgZ8UAvdUei5zf5H0Jr6fVo4Qhv00Sbd54Ppb",
  stripe_test_api_key:
    "pk_test_51KdPvFBqBuvo2VlvctLUF2yCFicwSsUCsH9HxPHmaXOJdns4hVGAdePl05UUSFYJf7dxTZQPERBoB5VoWyHYpb4G003Dysco1I",
};

export default config;
