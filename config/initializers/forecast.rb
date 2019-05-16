ForecastIO.configure do |configuration|
    configuration.api_key = ENV['dark_sky']
    configuration.default_params = {units: 'si', lang: 'it'}
end