import { z } from "zod";

//https://transform.tools/json-to-zod

export const buildPayloadSchema = z.object({
  id: z.string().nullish(),
  accountName: z.string().nullish(),
  projectName: z.string().nullish(),
  buildDetailsPageUrl: z.string().nullish(),
  parentBuildId: z.string().nullish(),
  appId: z.string().nullish(),
  initiatingUserId: z.string().nullish(),
  cancelingUserId: z.string().nullish(),
  platform: z.string().nullish(),
  status: z.string().nullish(),
  artifacts: z
    .object({
      buildUrl: z.string().nullish(),
      logsS3KeyPrefix: z.string().nullish(),
    })
    .nullish(),
  metadata: z
    .object({
      appName: z.string().nullish(),
      username: z.string().nullish(),
      workflow: z.string().nullish(),
      appVersion: z.string().nullish(),
      appBuildVersion: z.string().nullish(),
      cliVersion: z.string().nullish(),
      sdkVersion: z.string().nullish(),
      buildProfile: z.string().nullish(),
      distribution: z.string().nullish(),
      appIdentifier: z.string().nullish(),
      gitCommitHash: z.string().nullish(),
      gitCommitMessage: z.string().nullish(),
      runtimeVersion: z.string().nullish(),
      channel: z.string().nullish(),
      releaseChannel: z.string().nullish(),
      reactNativeVersion: z.string().nullish(),
      trackingContext: z.object({
        platform: z.string().nullish(),
        account_id: z.string().nullish(),
        dev_client: z.boolean().nullish(),
        project_id: z.string().nullish(),
        tracking_id: z.string().nullish(),
        project_type: z.string().nullish(),
        dev_client_version: z.string().nullish(),
      }),
      credentialsSource: z.string().nullish(),
      isGitWorkingTreeDirty: z.boolean().nullish(),
      message: z.string().nullish(),
      runFromCI: z.boolean().nullish(),
    })
    .nullish(),
  metrics: z
    .object({
      memory: z.number().nullish(),
      buildEndTimestamp: z.number().nullish(),
      totalDiskReadBytes: z.number().nullish(),
      buildStartTimestamp: z.number().nullish(),
      totalDiskWriteBytes: z.number().nullish(),
      cpuActiveMilliseconds: z.number().nullish(),
      buildEnqueuedTimestamp: z.number().nullish(),
      totalNetworkEgressBytes: z.number().nullish(),
      totalNetworkIngressBytes: z.number().nullish(),
    })
    .nullish(),
  error: z
    .object({ message: z.string().nullish(), errorCode: z.string().nullish() })
    .nullish(),
  createdAt: z.string().nullish(),
  enqueuedAt: z.string().nullish(),
  provisioningStartedAt: z.string().nullish(),
  workerStartedAt: z.string().nullish(),
  completedAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  expirationDate: z.string().nullish(),
  priority: z.string().nullish(),
  resourceClass: z.string().nullish(),
  actualResourceClass: z.string().nullish(),
  maxRetryTimeMinutes: z.number().nullish(),
});

export const submitPayloadSchema = z.object({
  id: z.string().nullish(),
  accountName: z.string().nullish(),
  projectName: z.string().nullish(),
  submissionDetailsPageUrl: z.string().nullish(),
  parentSubmissionId: z.string().nullish(),
  appId: z.string().nullish(),
  archiveUrl: z.string().nullish(),
  initiatingUserId: z.string().nullish(),
  cancelingUserId: z.string().nullish(),
  turtleBuildId: z.string().nullish(),
  platform: z.string().nullish(),
  status: z.string().nullish(),
  submissionInfo: z
    .object({
      error: z.object({
        message: z.string().nullish(),
        errorCode: z.string().nullish(),
      }),
      logsUrl: z.string().nullish(),
    })
    .nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  completedAt: z.string().nullish(),
  maxRetryTimeMinutes: z.number().nullish(),
});
