const {
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = (phase, { defaultConfig }) => {
  const isBuildOrExport = [
    PHASE_EXPORT,
    PHASE_PRODUCTION_BUILD,
  ].includes(phase)

  return withBundleAnalyzer({ enabled: isBuildOrExport })(defaultConfig)
}
