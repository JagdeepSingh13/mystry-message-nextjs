import mongoose from "mongoose";

type ConnectionObject = {
  // it has 0,1,2,3 as response -> gives state of connection
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    //console.log(db) & db.connections
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;

// re_8tpqMn7P_2Br4HHSGi7wrW1Nv3YYf4hgn;
