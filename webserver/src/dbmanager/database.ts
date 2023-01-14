import tunnel from "tunnel-ssh";
import { PrismaClient } from '@prisma/client';


export async function connectToDatabase(
  sshUsername: string,
  sshKeyPath: string,
  sshHost: string,
  databaseHost: string,
  databaseName: string,
  databaseUsername: string,
  databasePassword: string,
) {
  const tnl = await tunnel({
    host: sshHost,
    username: sshUsername,
    privateKey: sshKeyPath,
    port: 22,
    dstPort: 5432,
    dstHost: databaseHost,
    localPort: 5433,
  })

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: `postgresql://${databaseUsername}:${databasePassword}@localhost:5433/${databaseName}`,
      },
    },
  })

  try {
    // Use the `prisma` instance to execute queries against the database
  } finally {
    await prisma.disconnect()
    tnl.close()
  }
}


