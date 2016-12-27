{
  "targets": [
    {
      "target_name": "delta",
      "sources": [ "src/delta.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
