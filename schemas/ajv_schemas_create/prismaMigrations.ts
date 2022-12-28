import ajvInstance from '../ajv-instance';
import { prismaMigrations_ajv } from '../mapper_ajv';


const prismaMigrations_schema = {
  type: 'object',
  properties: {
    checksum: prismaMigrations_ajv.checksum.api,
    finishedAt: prismaMigrations_ajv.finishedAt.api,
    startedAt: prismaMigrations_ajv.startedAt.api,
    id: prismaMigrations_ajv.id.api,
    appliedStepsCount: prismaMigrations_ajv.appliedStepsCount.api,
    rolledBackAt: prismaMigrations_ajv.rolledBackAt.api,
    migrationName: prismaMigrations_ajv.migrationName.api,
    logs: prismaMigrations_ajv.logs.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(prismaMigrations_schema);
