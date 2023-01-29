import ajvInstance from '../ajv-instance';
import { prismaMigrations_ajv } from '../mapper_ajv';


const prismaMigrations_schema = {
  type: 'object',
  properties: {
    checksum: prismaMigrations_ajv.checksum.api,
    finishedAt: prismaMigrations_ajv.finishedAt.api,
    migrationName: prismaMigrations_ajv.migrationName.api,
    logs: prismaMigrations_ajv.logs.api,
    rolledBackAt: prismaMigrations_ajv.rolledBackAt.api,
    startedAt: prismaMigrations_ajv.startedAt.api,
    appliedStepsCount: prismaMigrations_ajv.appliedStepsCount.api,
  },
  required: ['checksum', 'appliedStepsCount', 'startedAt', 'migrationName'],
  additionalProperties: false,
};

export default ajvInstance.compile(prismaMigrations_schema);
