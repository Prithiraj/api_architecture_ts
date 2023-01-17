import ajvInstance from '../ajv-instance';
import { prismaMigrations_ajv } from '../mapper_ajv';


const prismaMigrations_schema = {
  type: 'object',
  properties: {
    id: prismaMigrations_ajv.id.api,
    checksum: prismaMigrations_ajv.checksum.api,
    finishedAt: prismaMigrations_ajv.finishedAt.api,
    migrationName: prismaMigrations_ajv.migrationName.api,
    logs: prismaMigrations_ajv.logs.api,
    rolledBackAt: prismaMigrations_ajv.rolledBackAt.api,
    startedAt: prismaMigrations_ajv.startedAt.api,
    appliedStepsCount: prismaMigrations_ajv.appliedStepsCount.api,
  },
  required: ['checksum', 'migrationName', 'startedAt', 'appliedStepsCount'],
  additionalProperties: false,
};

export default ajvInstance.compile(prismaMigrations_schema);
