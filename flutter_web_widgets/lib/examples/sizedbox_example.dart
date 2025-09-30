import 'package:flutter/material.dart';

class SizedBoxExample extends StatelessWidget {
  const SizedBoxExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: 200.0,
        height: 100.0,
        child: Container(
          color: Colors.amber,
          child: const Center(child: Text('SizedBox')),
        ),
      ),
    );
  }
}
